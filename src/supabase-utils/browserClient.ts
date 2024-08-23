import { createBrowserClient } from "@supabase/ssr";
import { getSbEnvs } from "@/helpers/sbEnvs";

const { url, anonKey } = getSbEnvs();

export const getSupabaseBrowserClient = () => createBrowserClient(url, anonKey);
