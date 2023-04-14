'use client';
import { cartContext } from '@/Context/AppContext';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Button,
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
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

type CartType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}[];

const CartPage = () => {
  const router = useRouter();

  const cart = useContext(cartContext);
  const [cartItems, setCartItems] = useState<CartType | null>(null);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    // @ts-ignore
    setTotalPrice(cart.getTotalPrice()); // type error Here need to fix later
    setCartItems(cart.items);
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

        {
          // @ts-ignore
          cartItems?.length > 0 &&
            // @ts-ignore
            cartItems.map((eachItem) => {
              return (
                <HStack
                  spacing={3}
                  key={`productId-${eachItem.id}`}
                  alignItems="center"
                  w="full"
                >
                  <Hide below="md">
                    <AspectRatio ratio={4 / 3} w={20}>
                      <Image
                        borderRadius="5px"
                        src={eachItem.image}
                        alt={eachItem.title}
                      />
                    </AspectRatio>
                  </Hide>

                  <Heading size={{ sm: 'sm', md: 'md' }}>
                    {eachItem.title}
                  </Heading>

                  <Spacer />
                  <HStack spacing={2}>
                    <Text fontWeight="bold" ml={5}>
                      {eachItem.quantity}
                    </Text>
                    <Text fontWeight="bold">
                      <span>&#215;</span>
                    </Text>
                    <Text fontWeight="bold"> &euro;{eachItem.price}</Text>
                  </HStack>
                  <Heading size="sm" textAlign="end">
                    &euro; {(eachItem.price * eachItem.quantity).toFixed(2)}
                  </Heading>
                  <DeleteIcon
                    onClick={() => {
                      // @ts-ignore
                      cart.deleteOneFromCart(eachItem.id); // Need a type fixation
                    }}
                  />
                </HStack>
              );
            })
        }

        <Divider />
        <HStack justifyContent="space-between" w="full">
          <Text>Total</Text>
          <Heading size="lg">{totalPrice.toFixed(2)}</Heading>
        </HStack>
        <Button
          size="lg"
          mt={4}
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
          onClick={() => router.push('/checkout')}
        >
          Check Out
        </Button>
      </VStack>
    </Container>
  );
};

export default CartPage;
