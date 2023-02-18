import { Flex, HStack, Link, Spacer, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <Flex
      w="100%"
      px="6"
      py="2"
      align="center"
      justify="space-around"
      marginTop={'auto'}
    >
      <HStack>
        <Text>© {new Date().getFullYear()} KSTORE.All rights reserved</Text>
      </HStack>
      <Spacer />
      <HStack as="nav" spacing="5">
        <Link as={NextLink} href="/">
          <FaYoutube />
        </Link>
        <Link as={NextLink} href="/">
          <FaTwitter />
        </Link>
        <Link as={NextLink} href="/">
          <FaLinkedin />
        </Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
