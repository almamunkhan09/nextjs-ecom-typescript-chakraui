import { sql } from './databaseConnection';

export async function getAllProducts() {
  const allProducts = await sql`SELECT * FROM persons`;
  return allProducts;
}

const allProducts = getAllProducts();
console.log(allProducts);
