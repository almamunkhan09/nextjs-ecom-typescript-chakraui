import {
  Button,
  Flex,
  Heading,
  Hide,
  HStack,
  Image,
  Link,
  Spacer,
} from '@chakra-ui/react';
// import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import DrakLightMode from './DrakLightMode';
import ShoppingCartIcon from './ShoppingCartIcon';

const links = ['Products', 'About Us', 'My Cart'];

function Nav() {
  // const { colorMode } = useColorMode();

  return (
    <Flex w="100%" px="6" py="2" align="center" justify="space-between">
      <HStack>
        <Image
          width={50}
          height={50}
          borderRadius="full"
          // objectFit="cover"
          src="logoDark.svg"
          alt="logo"
        />

        <Heading letterSpacing={2}> KSTORE </Heading>
      </HStack>
      <Spacer />

      <HStack as="nav" spacing="5">
        <Hide below="md">
          {links.map((item) => (
            <Link
              textDecoration="none"
              key={`nav-${item}`}
              as={NextLink}
              href={`/${
                item === 'Home'
                  ? '/'
                  : item.toLocaleLowerCase().split(' ').join('')
              }`}
            >
              <Button variant="nav"> {item} </Button>
            </Link>
          ))}
        </Hide>

        <Link as={NextLink} href="/mycart">
          <ShoppingCartIcon />
        </Link>
        <DrakLightMode />
      </HStack>
    </Flex>
  );
}

export default Nav;
