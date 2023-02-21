'use client';
import { Center, Container, Text } from '@chakra-ui/react';
import React from 'react';

function ThankYou() {
  return (
    <Container
      m="auto"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Center>
        <Text textAlign="center">
          Thank you for your order. Your order number is #123456 . <br />
          We will review the order and process the shipment. Once shipment
          starts we will notify you through mail.
        </Text>
      </Center>
    </Container>
  );
}

export default ThankYou;
