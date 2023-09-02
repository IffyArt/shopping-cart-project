import { CartItem } from '@/models/cart-item';
import { createContext, useState } from 'react';

type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
};

const cartContextValue: CartContextType = {
  cart: [],
  setCart: () => {},
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

type Props = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
