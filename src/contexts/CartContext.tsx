import { CartItem } from '@/models/cart-item';
import { Product } from '@/models/product';
import { createContext, useState } from 'react';

type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  cartAddItem: (product: Product) => void;
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
    // const newCart = [...cart];
    // const CartItem :CartItem= {
    // 	id: product.id,
    // 	title: product.title,
    // 	quantity: 1,
    // 	price: product.price,
    // 	description: product.description,
    // 	category: product.category,
    // 	image: 'https://placeimg.com/640/480/any?r=0.9178516507833767',
    // }
    // newCart.forEach((item) =>
    //   item.id === product.id
    //     ? item.quantity++
    //     : newCart.push(CartItem),
    // );
    // setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, cartAddItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
