'use client';
import GenerateProductCard from '@/Components/GenerateProductCard';
import { products } from '@/products';
import { Center, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';

// type ProductsType = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   stock: number;
// }[];

function ProductPage() {
  // const [productList, setProductlist] = React.useState<ProductsType | []>([]);
  // React.useEffect(() => setProductlist([...products]));
  return (
    <Stack m={2} p={2} justifyContent={'center'}>
      <Center bg="inherit" h="100px">
        <Heading variant="h1"> Products </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {products.map((product) => {
          return GenerateProductCard(product);
        })}
      </SimpleGrid>
    </Stack>
  );
}

export default ProductPage;
