import { getSbEnvs } from "@/helpers/sbEnvs";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

// NOTE: this function is used on the backend with *middleware*
export const getSupabaseReqResClient = ({ request }: { request: NextRequest }) => {
  const {url, anonKey} = getSbEnvs();

  // NOTE: copy existing headers from the incoming request to retain existing cookies
  let response = {
    value: NextResponse.next({ request }),
  };

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },

      // NOTE: forward cookies to handlers downstream
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
        });

        // TODO: why are we repeating this code here?
        response.value = NextResponse.next({ request });

        // NOTE: set cookies on the response object for the browser to receive / store
        cookiesToSet.forEach(({ name, value, options }) => {
          response.value.cookies.set(name, value, options);
        });
      },
    },
  });

  // NOTE: return the supabase client as well as the enriched response object
  return { supabase, response };
};
