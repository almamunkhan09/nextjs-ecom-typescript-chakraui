'use client';
// Import navigation bar,footer from components directory
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
// Import
import { ChakraProvider, ColorModeScript, Flex } from '@chakra-ui/react';
import theme from './theme';

export function ChakraUiWrapper({ children }: { children: React.ReactNode }) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex maxW="100vw" height="100vh" direction="column">
        <Nav />
        {children}
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
