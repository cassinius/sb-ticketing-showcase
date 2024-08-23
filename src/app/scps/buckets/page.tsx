/**
 * Server Component
 * 
 * Example for using the Supabase "SSR" client in a Server Component.
 */
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

// NOTE: The name of the function is irrelevant
export default async function ServerComponent() {
  const supabase = getSupabaseCookiesUtilClient();
  const buckets = await supabase.storage.listBuckets();

  return (
    <div>
      <h1>Server Component -&gt; List Buckets</h1>
      <pre>{JSON.stringify(buckets, null, 2)}</pre>
    </div>
  );
}
