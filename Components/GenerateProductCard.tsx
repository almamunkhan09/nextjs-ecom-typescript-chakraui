// 'use client';
import {
  AspectRatio,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  stock: number;
};

export default function GenerateProductCard(singleProduct: Product) {
  return (
    <Link
      as={NextLink}
      key={`product-${singleProduct.id}`}
      href={`/products/${singleProduct.id}`}
      data-test-id={`product-${singleProduct.id}`}
      textDecoration="none"
    >
      <Card maxW="sm">
        <CardBody>
          <AspectRatio maxW="sm" ratio={4 / 3}>
            <Image
              src={singleProduct.image}
              borderRadius="lg"
              objectFit="scale-down"
            />
          </AspectRatio>

          <Stack mt="6" spacing="3">
            <Heading size="md">{singleProduct.title}</Heading>

            <Text color="blue.600" fontSize="2xl">
              {singleProduct.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Link>
  );
}
