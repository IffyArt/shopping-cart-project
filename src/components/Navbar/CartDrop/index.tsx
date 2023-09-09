/* eslint-disable @next/next/no-img-element */
import { CartItem } from '@/models/cart-item';
import styles from './styles.module.css';

type Props = {
  cart: CartItem[];
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  editCartItemQuantity: (id: number, quantity: number) => void;
};

const CartDrop = ({
  cart,
  isActive,
  setIsActive,
  editCartItemQuantity,
}: Props) => {
  return (
    <article className={`${styles.cartDrop} ${isActive && styles.active}`}>
      <ul className={styles.cartItems}>
        {cart.map((item) => (
          <li key={item.id}>
            <aside>
              <img src='https://fakeimg.pl/100x100/' alt={item.title} />
            </aside>
            <article>
              <h2>{item.title}</h2>
              <p>價錢：{item.price}</p>
              <p>
                數量：<b onClick={() => editCartItemQuantity(item.id, -1)}>-</b>
                {item.quantity}
                <b onClick={() => editCartItemQuantity(item.id, 1)}>+</b>
              </p>
            </article>
          </li>
        ))}
      </ul>
      <footer className={styles.footer} onClick={() => setIsActive(false)}>
        關閉購物車
      </footer>
    </article>
  );
};

export default CartDrop;
