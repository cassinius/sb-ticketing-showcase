// import { getSbEnvs } from "@/helpers/sbEnvs";
// import { createServerClient, type CookieOptions } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export function createClient() {
//   const { url, anonKey } = getSbEnvs();

//   const cookieStore = cookies();

//   return createServerClient(url, anonKey, {
//     cookies: {
//       getAll() {
//         return cookieStore.getAll();
//       },
//       setAll(cookiesToSet) {
//         try {
//           cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
//         } catch {
//           // The `setAll` method was called from a Server Component.
//           // This can be ignored if you have middleware refreshing
//           // user sessions.
//         }
//       },
//     },
//   });
// }
