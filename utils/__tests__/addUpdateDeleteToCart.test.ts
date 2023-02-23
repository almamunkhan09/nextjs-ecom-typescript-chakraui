import { addToCart, deleteOneFromCart } from '../addUpdateDeleteToCart';

test('add item to cart', () => {
  const cart = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 2 },
  ];

  expect(addToCart(cart, 3, 4)).toStrictEqual([
    ...cart,
    { id: 3, quantity: 4 },
  ]);
  expect(addToCart(cart, 2, 4)).toStrictEqual([
    { id: 1, quantity: 3 },
    { id: 2, quantity: 4 },
  ]);
});

test('Delete a item from the cart', () => {
  const cart = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 2 },
    { id: 3, quantity: 5 },
  ];
  expect(deleteOneFromCart(cart, 2)).toStrictEqual([
    { id: 1, quantity: 3 },
    { id: 3, quantity: 5 },
  ]);
});
