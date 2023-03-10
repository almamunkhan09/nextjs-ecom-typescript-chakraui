'use client';
// import ImageBox from '@/Components/ImageBox';
import ProductDetails from '@/Components/ProductDetails';
import { products } from '@/products';
import { Box, GridItem, Image, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// import React, { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
};

interface ProductId {
  productId: number;
}

function SingleProduct({ productId }: ProductId) {
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);

  useEffect(() => {
    const newProduct = products.filter((product) => product.id === productId);
    setSingleProduct(newProduct[0]);
  }, [productId]);
  if (!singleProduct) return <div> </div>;
  return (
    <SimpleGrid
      maxW="4xl"
      m="auto"
      columns={{ sm: 1, md: 2 }}
      rowGap={2}
      columnGap={2}
      w="full"
      alignItems="center"
      p={0}
    >
      <GridItem colSpan={1} display="flex" justifyContent="center">
        <Box>
          <Image
            maxW="sm"
            src={singleProduct.image}
            alt="Dan Abramov"
            borderRadius="5px"
          />
        </Box>
      </GridItem>
      <GridItem colSpan={1} justifyContent="center" alignItems="center">
        <ProductDetails singleProduct={singleProduct} />
      </GridItem>
    </SimpleGrid>
  );
}

export default SingleProduct;
