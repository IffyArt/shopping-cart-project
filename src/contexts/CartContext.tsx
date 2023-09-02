import { createContext } from 'react';

const CartContext = createContext({});

type Props = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
