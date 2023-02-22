import { cartContext } from '@/Context/AppContext';
import { Badge, Box, IconButton } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

function ShoppingCartIcon() {
  const cart = useContext(cartContext);
  const [numberOfItems, setNumberOfItems] = React.useState<any>(0); // Need to change both here and context Api also
  React.useEffect(() => {
    setNumberOfItems(cart.getNumberOfItems());
  }, [cart]);
  return (
    <IconButton
      py="1"
      aria-label="Notifications"
      size="sm"
      icon={
        <>
          <MdAddShoppingCart size="1rem" />
          <Box
            as="span" // need to give here the attribute
            position="absolute"
            top="0px"
            right="2px"
          >
            <Badge variant="solid" colorScheme="blue">
              {numberOfItems}
            </Badge>
          </Box>
        </>
      }
    />
  );
}

export default ShoppingCartIcon;
