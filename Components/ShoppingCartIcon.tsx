import { cartContext } from '@/Context/AppContext';
import { Badge, Box, IconButton } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

function ShoppingCartIcon() {
  const cart = useContext(cartContext);
  const [numberOfItems, setNumberOfItems] = React.useState<any>(0);
  React.useEffect(() => {
    setNumberOfItems(cart.getNumberOfItems());
  }, [cart]);
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
              {numberOfItems}
            </Badge>
          </Box>
        </>
      }
    />
  );
}

export default ShoppingCartIcon;
