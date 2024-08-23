/**
 * Server Action
 *
 * Example for using the Supabase "SSR" client in a Server Action.
 */
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

export default function PageWithServerAction() {
  async function serverActionWithSupabase() {
    "use server";
    const supabase = getSupabaseCookiesUtilClient();
    const buckets = await supabase.storage.listBuckets();
    console.log("@server", buckets);
  }

  // const btnStyle = {
  //   margin: '1rem',
  //   padding: '0.5rem 1rem',
  //   fontSize: '1rem',
  //   backgroundColor: 'blue',
  //   borderRadius: '0.5rem',
  // };

  return (
    <form action={serverActionWithSupabase}>
      <button className="m-4 btn btn-success" type="submit">Run Server Action</button>
    </form>
  );
}
