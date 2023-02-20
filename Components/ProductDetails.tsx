'use client';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

interface Product {
  singleProduct: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    stock: number;
  };
}

function ProductDetails({ singleProduct }: Product) {
  return (
    <VStack justifyContent="start" borderLeft={{ md: 'solid 1px' }} p={5}>
      <Heading> {singleProduct.title}</Heading>
      <Text maxW="sm" textAlign="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero
        laboriosam repudiandae et optio quae rerum dolorum aliquam porro,
        molestias sunt natus ex exercitationem deserunt officia veniam, soluta
        laborum ea!
      </Text>
      <Stack justifySelf="start">
        <Heading variant="h6" mt={2}>
          ${singleProduct.price}
        </Heading>
      </Stack>

      <ButtonGroup spacing={2} alignItems="center">
        <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton
            aria-label="Add"
            icon={<MinusIcon />}
            // onClick={countDecrement}
          />

          <Button>{12}</Button>
          <IconButton
            aria-label="Add to friends"
            icon={<AddIcon />}
            // onClick={countIncrement}
          />
        </ButtonGroup>
        <Button
          variant="solid"
          colorScheme="blue"
          // onClick={(e) => {
          //   e.preventDefault();
          //   clickHandler(
          //     products[params.products - 1],
          //     cartList,
          //     setCartList,
          //   );
          //   router.refresh('/');
          // }}
        >
          Add to Cart
        </Button>
      </ButtonGroup>
    </VStack>
  );
}

export default ProductDetails;
