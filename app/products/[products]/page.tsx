'use client';
import ImageBox from '@/Components/ImageBox';
import ProductDetails from '@/Components/ProductDetails';
import {
  Container,
  Divider,
  Flex,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';

type Params = {
  params: {
    products: string;
  };
};

function page({ params }: Params) {
  console.log(params);
  return (
    <SimpleGrid
      maxW="4xl"
      m="auto"
      columns={{ sm: 1, md: 2 }}
      rowGap={2}
      columnGap={2}
      w="full"
      alignItems={'center'}
      p={0}
    >
      <GridItem colSpan={1} display="flex" justifyContent="center">
        <ImageBox />
      </GridItem>
      <GridItem
        colSpan={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ProductDetails />
      </GridItem>
    </SimpleGrid>
  );
}

export default page;
