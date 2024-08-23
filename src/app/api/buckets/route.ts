/**
 * Route Handler
 *
 * Example for using the Supabase "SSR" client in an API Route.
 */
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = getSupabaseCookiesUtilClient();
  const buckets = await supabase.storage.listBuckets();
  return NextResponse.json(buckets);
}
