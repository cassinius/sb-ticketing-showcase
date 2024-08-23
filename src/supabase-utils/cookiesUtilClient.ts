import { createServerClient } from "@supabase/ssr";
import { getSbEnvs } from "@/helpers/sbEnvs";
import { cookies } from "next/headers";

// NOTE: this function is used on the backend with *App Router*
// NOTE: same as the `serverClient.ts` file, which was taken from the official Supabase docs
export const getSupabaseCookiesUtilClient = () => {
  const { url, anonKey } = getSbEnvs();

  const cookieStore = cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch (err) {
          console.error("Failed to set cookies", err);
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};
