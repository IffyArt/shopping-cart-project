import { CartContext } from '@/contexts/CartContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { SiPrestashop } from 'react-icons/si';
import CartDrop from './CartDrop';
import styles from './styles.module.css';

type Props = {};

const Navbar = (props: Props) => {
  const { cart, editCartItemQuantity } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href='/'>
        <SiPrestashop />
        <b>SHOPPING</b>
      </Link>
      <article className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href='/about'>關於我們</Link>
          </li>
          <li>
            <Link href='/'>商品項目</Link>
          </li>
          <li>
            <Link href='/'>使用客群</Link>
          </li>
        </ul>
      </article>

      <ul className={styles.toolBar}>
        <li onClick={() => setIsActive(!isActive)}>
          <HiOutlineShoppingBag />
          {!!cart.length && (
            <span className={styles.badge}>
              {cart.length > 10 ? '9+' : cart.length}
            </span>
          )}
        </li>
        <li>
          <BiSolidUser />
        </li>
      </ul>
      <CartDrop
        isActive={isActive}
        setIsActive={setIsActive}
        editCartItemQuantity={editCartItemQuantity}
        cart={cart}
      />
    </nav>
  );
};

export default Navbar;
