import { products } from '@/products';
import { Metadata } from 'next';
import React from 'react';
import SingleProduct from '../../../Components/SingleProduct';

interface Params {
  params: {
    products: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const productID = parseInt(params.products);
  const newProduct = await products.filter(
    (product) => product.id === productID,
  )[0];
  const pageTitle = newProduct ? newProduct.title : 'KSTORE';

  return { title: pageTitle };
}

function page({ params }: Params) {
  const productId = parseInt(params.products);
  return <SingleProduct productId={productId} />;
}

export default page;

// const productID = parseInt(params.products);
//   const newProduct = await products.filter(
//     (product) => product.id === productID,
//   );
//   const pageTitle = newProduct[0].title;
