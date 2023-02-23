import { products } from '@/products';
import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

const productInCookie = Cookies.get('myCart')
  ? JSON.parse(Cookies.get('myCart'))
  : [];

// export type ContextType = {
//   items: { id: number; quantity: number }[];
//   getProductQuantity: (id: number) => void;
//   // addOneToCart: () => {},
//   addToCart: (id: number, number: number) => void;
//   removeOneFromCart: (id: number) => void;
//   deleteFromCart: (id: number) => void;
//   getTotalPrice: () => void;
//   getNumberOfItems: () => void;
// };

export const cartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  // addOneToCart: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  deleteOneFromCart: () => {},
  getTotalPrice: () => {},
  getNumberOfItems: () => {},
});

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(productInCookie);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id,
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  // function addOneToCart(id) {
  //   const quantity = getProductQuantity(id);

  //   if (quantity === 0) {
  //     setCartProducts([
  //       ...cartProducts,
  //       {
  //         id: id,
  //         quantity: 1,
  //       },
  //     ]);
  //   } else {
  //     setCartProducts(
  //       cartProducts.map((product) =>
  //         product.id === id
  //           ? { ...product, quantity: product.quantity + 1 }
  //           : product,
  //       ),
  //     );
  //   }
  // }
  function addToCart(product, number) {
    const quantity = getProductQuantity(product.id);

    if (quantity === 0) {
      const newCart = [
        ...cartProducts,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: number,
        },
      ];
      setCartProducts(newCart);
      Cookies.set('myCart', JSON.stringify(newCart));
    } else {
      const newCart = cartProducts.map((eachProduct) =>
        eachProduct.id === product.id
          ? { ...eachProduct, quantity: number }
          : eachProduct,
      );
      setCartProducts(newCart);
      Cookies.set('myCart', JSON.stringify(newCart));
    }
  }
  function deleteOneFromCart(id) {
    const newCart = cartProducts.filter((product) => !(product.id === id));
    setCartProducts(newCart);
    Cookies.set('myCart', JSON.stringify(newCart));
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
      const productdata = products.filter(
        (product) => product.id === cartItem.id,
      );
      return (totalPrice += productdata[0].price * cartItem.quantity);
    });
    return totalPrice;
  }
  function getNumberOfItems() {
    const initialValue = 0;
    let totalItems = 0;
    if (cartProducts.length > 0) {
      totalItems = cartProducts.reduce(
        (accumulator, product) => accumulator + product.quantity,
        initialValue,
      );
    }
    return totalItems;
  }
  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    // addOneToCart,
    addToCart,
    removeOneFromCart,
    deleteOneFromCart,
    getTotalPrice,
    getNumberOfItems,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
