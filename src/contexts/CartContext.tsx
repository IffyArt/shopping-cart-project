import { CartItem } from '@/models/cart-item';
import { Product } from '@/models/product';
import { createContext, useState } from 'react';

type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  cartAddItem: (product: Product) => void;
  editCartItemQuantity: (id: number, number: number) => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

type Props = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartAddItem = (product: Product) => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      item.quantity++;
      setCart([...cart]);
    } else {
      const CartItem: CartItem = {
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
        description: product.description,
        category: product.category,
        image: 'https://placeimg.com/640/480/any?r=0.9178516507833767',
      };
      setCart([...cart, CartItem]);
    }
  };

  const editCartItemQuantity = (id: number, number: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      if (item.quantity + number > 0) {
        item.quantity += number;
        setCart([...cart]);
      } else {
        setCart(cart.filter((cartItem) => cartItem.id !== id));
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, cartAddItem, editCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
