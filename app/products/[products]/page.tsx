import React from 'react';
import SingleProduct from '../../../Components/SingleProduct';

interface Params {
  params: {
    products: string;
  };
}

function page({ params }: Params) {
  const productId = parseInt(params.products) - 1;
  return <SingleProduct productId={productId} />;
}

export default page;
