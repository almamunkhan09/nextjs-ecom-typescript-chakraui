'use client';
import { cartContext } from '@/Context/AppContext';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Center,
  Container,
  Divider,
  Heading,
  Hide,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

const CartPage = () => {
  const cart = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // @ts-ignore
    return setTotalPrice(cart.getTotalPrice()); // type error Here need to fix later
  }, [cart]);

  return (
    <Container
      m="auto"
      alignItems="center"
      justifyContent="center"
      display="flex"
      maxW="lg"
    >
      <VStack
        w="full"
        h="full"
        p={5}
        m={5}
        spacing={4}
        align="center"
        justifyContent="center"
      >
        <Center>
          <Heading size="2xl">Your cart</Heading>
        </Center>
        <HStack spacing={3} alignItems="center" w="full">
          <Hide below="md">
            <AspectRatio ratio={4 / 3} w={20}>
              <Image
                borderRadius="5px"
                src="https://images.unsplash.com/photo-1667185487460-b303881b2bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Njg0NzY0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                alt="Skateboard"
              />
            </AspectRatio>
          </Hide>

          <Heading size={{ sm: 'sm', md: 'md' }}>Item Title</Heading>
          <HStack spacing={2}>
            <Text fontWeight="bold" ml="auto">
              2
            </Text>
            <Text fontWeight="bold">
              <span>&#215;</span>
            </Text>
            <Text fontWeight="bold">$4</Text>
          </HStack>
          <Spacer />
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
          <DeleteIcon />
        </HStack>
        <Divider />
        <HStack justifyContent="space-between" w="full">
          <Text color="gray.600">Total</Text>
          <Heading size="lg">{totalPrice}</Heading>
        </HStack>
      </VStack>
    </Container>
  );
};

export default CartPage;
