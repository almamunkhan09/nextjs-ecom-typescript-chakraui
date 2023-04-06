import * as dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';

dotenv.config();

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}[];

const sql = postgres();
async function getAllProducts() {
  const allProducts = await sql<Products>`SELECT * FROM products`;
  return allProducts;
}

export async function GET(
  req: NextRequest,
  res: NextResponse,
): Promise<NextResponse> {
  const allProducts = await getAllProducts();
  console.log(allProducts);
  return NextResponse.json(allProducts);
}
