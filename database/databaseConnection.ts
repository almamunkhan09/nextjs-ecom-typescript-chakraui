// import { Client } from 'pg';

// const client = new Client({
//   host: 'db.absvumqnuaoxlowctwij.supabase.co',
//   user: 'postgres',
//   port: 5432,
//   password: 'Ma0902044Ma#',
//   database: 'postgres',
// });

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import postgres from 'postgres';

dotenv.config();

export const sql = postgres();

// export async function getAllProducts() {
//   const allProducts = await sql`SELECT * FROM persons`;
//   return allProducts;
// }

// const allProducts = getAllProducts();
// console.log(allProducts);
