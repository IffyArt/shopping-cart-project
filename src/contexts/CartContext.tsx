import { CartItem } from '@/models/cart-item';
import { createContext } from 'react';

type CartContextType = {
  cart: CartItem[];
};

const cartContextValue: CartContextType = {
  cart: [],
};

export const CartContext = createContext<CartContextType>(cartContextValue);

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
