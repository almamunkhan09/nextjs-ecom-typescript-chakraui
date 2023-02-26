// import { Client } from 'pg';

// const client = new Client({
//   host: 'db.absvumqnuaoxlowctwij.supabase.co',
//   user: 'postgres',
//   port: 5432,
//   password: 'Ma0902044Ma#',
//   database: 'postgres',
// });

import postgres from 'postgres';

const sql = postgres({
  host: 'db.absvumqnuaoxlowctwij.supabase.co',
  port: 6543,
  database: 'postgres',
  username: 'postgres',
  password: 'Ma0902044Ma#',
});

console.log(await sql`SELECT * FROM persons`);
await sql.end();
