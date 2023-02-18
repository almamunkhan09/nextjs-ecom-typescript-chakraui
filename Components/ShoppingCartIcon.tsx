import { Badge, Box, IconButton } from '@chakra-ui/react';
import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

function ShoppingCartIcon() {
  return (
    <IconButton
      py="1"
      aria-label="Notifications"
      icon={
        <>
          <MdAddShoppingCart size="1.5rem" />
          <Box
            as="span" // need to give here the attribute
            position="absolute"
            top="0px"
            right="2px"
          >
            <Badge variant="solid" colorScheme="blue">
              4 {/* {totalItemInCartList ? totalItemInCartList : ''} */}
            </Badge>
          </Box>
        </>
      }
    />
  );
}

export default ShoppingCartIcon;
