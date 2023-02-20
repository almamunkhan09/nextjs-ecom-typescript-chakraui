'use client';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

interface ProductId {
  productId: number;
}

function ImageBox() {
  return (
    <Box>
      <Image
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        borderRadius="5px"
      />
    </Box>
  );
}

export default ImageBox;
