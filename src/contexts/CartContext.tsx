import { createContext } from 'react';

const cartContextValue = {
  cart: [],
};

export const CartContext = createContext(cartContextValue);

type Props = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  return (
    <CartContext.Provider value={{ ...cartContextValue }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
