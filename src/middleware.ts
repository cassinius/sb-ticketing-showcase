import { NextRequest } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";

export async function middleware(request: NextRequest) {
  const { supabase, response } = getSupabaseReqResClient({request});

  // NOTE: here we return NOT the response itself, but the "workaround" objects value
  return response.value;
}
