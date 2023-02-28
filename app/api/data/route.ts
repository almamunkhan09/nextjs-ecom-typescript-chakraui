import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<postgres.Row[]>,
// ) {
//   const { method, query } = req;
//   console.log(req.method, req.query);
//   const allProducts = await getAllProducts();
//   res.status(200).json(allProducts);
// }
import { NextRequest, NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next';
import postgres from 'postgres';

dotenv.config();

const sql = postgres();
async function getAllProducts() {
  const allProducts = await sql`SELECT * FROM products`;
  return allProducts;
}

export async function GET() {
  // const { searchParams } = new URL(request.url);
  const allProducts = await getAllProducts();

  return NextResponse.json(allProducts);
}
