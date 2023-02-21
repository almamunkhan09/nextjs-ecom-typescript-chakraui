import { products } from '@/products';
import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

const productInCookie = Cookies.get('myCart')
  ? JSON.parse(Cookies.get('myCart'))
  : [];

const cartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalPrice: () => {},
});

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(productInCookie);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id == id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      );
    }
  }
  function deleteOneFromCart(id) {
    setCartProducts((preValue) =>
      preValue.filter((product) => !product.id === id),
    );
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteOneFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      );
    }
  }

  function getTotalPrice() {
    let totalPrice = 0;
    cartProducts.map((cartItem) => {
      const productdata = products.map((product) => product.id === cartItem.id);
      return (totalPrice += productdata.price * cartItem.quantity);
    });
  }
  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteOneFromCart,
    getTotalPrice,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
