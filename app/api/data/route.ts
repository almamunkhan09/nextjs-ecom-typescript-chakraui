import * as dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';

dotenv.config();

// type Products = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   stock: number;
// }[];

const { Pool } = require('pg');
const connectDb = async () => {
  try {
    const pool = new Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });
    await pool.connect();
    const res = await pool.query('SELECT * FROM products');
    console.log(res);
    await pool.end();
    return res;
  } catch (error) {
    console.log(error);
  }
};
// const sql = postgres();
// async function getAllProducts() {
//   const allProducts = await sql<Products>`SELECT * FROM products`;
//   return allProducts;
// }

export async function GET(
  req: NextRequest,
  res: NextResponse,
): Promise<NextResponse> {
  const allProducts = await connectDb();
  console.log(allProducts);
  return NextResponse.json(allProducts);
}
