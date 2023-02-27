import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import type { NextApiRequest, NextApiResponse } from 'next';
import postgres from 'postgres';

dotenv.config();

const sql = postgres();
async function getAllProducts() {
  const allProducts = await sql`SELECT * FROM products`;
  return allProducts;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<postgres.Row[]>,
) {
  const allProducts = await getAllProducts();
  res.status(200).json(allProducts);
}
