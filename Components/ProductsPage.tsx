'use client';
import GenerateProductCard from '@/Components/GenerateProductCard';
// import { products } from '@/products';
import { Center, Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

async function getAllProducts() {
  try {
    const { data } = await axios.get('http://localhost:3000/api/data');
    return data;
  } catch (error) {
    throw new Error('Connection Error');
  }
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
};

function ProductsPage() {
  const [products, setProducts] = React.useState<Product[] | null>(null);
  React.useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => err);
  }, []);
  if (!products) {
    return (
      <Center alignItems="center" height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <Stack m={2} p={2} justifyContent="center">
      <Center bg="inherit" h="100px">
        <Heading variant="h1"> Products </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
        {products.map((product) => {
          return GenerateProductCard(product);
        })}
      </SimpleGrid>
    </Stack>
  );
}

export default ProductsPage;
