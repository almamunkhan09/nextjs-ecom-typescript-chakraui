'use client';

import Nav from '@/Components/Nav';
// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

export function ChakraUiWrapper({ children }: { children: React.ReactNode }) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Nav />

      {children}
    </ChakraProvider>
  );
}
