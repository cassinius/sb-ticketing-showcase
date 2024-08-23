# SB-Tick !

## Types

* Generate types from a remote (`supabase.com` instance)
```sh
  supabase gen types typescript --schema public --project-id YOUR_PROJECT_ID > supabase.ts
```

* Generate types locally
```sh
  npx supabase gen types typescript --schema public --local > supabase.ts
```

* Generate types in a self-hosted setup
  - find your `Supabase URL`
```sh
 npx supabase gen types typescript --schema public --db-url postgresql://USER:PASSWORD @DB_HOST:PORT/postgres > supabase.ts
```
