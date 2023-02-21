'use client';
// Import navigation bar,footer from components directory
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import CartProvider from '@/Context/AppContext';
// Import
import { ChakraProvider, Flex } from '@chakra-ui/react';

export function ChakraUiWrapper({ children }: { children: React.ReactNode }) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <CartProvider>
      <ChakraProvider>
        <Flex maxW="100vw" height="100vh" direction="column">
          <Nav />
          {children}
          <Footer />
        </Flex>
      </ChakraProvider>
    </CartProvider>
  );
}
