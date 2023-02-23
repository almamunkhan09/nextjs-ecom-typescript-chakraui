export type CartItem = {
  id: number;
  quantity: number;
};

export type Cart = CartItem[];

export function getProductQuantity(cart: Cart, id: number): number {
  const quantity = cart.find((product) => product.id === id)?.quantity;
  if (quantity === undefined) {
    return 0;
  }
  return quantity;
}

export function addToCart(cart: Cart, id: number, numberOfItems: number): Cart {
  const quantity = getProductQuantity(cart, id);

  if (quantity === 0) {
    const newCart = [
      ...cart,
      {
        id: id,
        quantity: numberOfItems,
      },
    ];
    return newCart;
  } else {
    const newCart = cart.map((eachItem) =>
      eachItem.id === id ? { ...eachItem, quantity: numberOfItems } : eachItem,
    );
    return newCart;
  }
}

export function deleteOneFromCart(cart: Cart, id: number) {
  const newCart = cart.filter((product) => !(product.id === id));
  return newCart;
}
