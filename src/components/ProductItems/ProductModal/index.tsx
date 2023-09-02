/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/contexts/CartContext';
import { Product } from '@/models/product';
import { Dispatch, SetStateAction, useContext } from 'react';
import styles from './styles.module.css';

type Props = {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product | null>>;
};

const ProductModal = ({ product, setProduct }: Props) => {
  const { cart, cartAddItem } = useContext(CartContext);
  console.log(cart);

  return (
    <article className={styles.modal}>
      <main className={styles.modalContainer}>
        <header>
          <h2>{product.title}</h2>
          <button onClick={() => setProduct(null)}>X</button>
        </header>
        <article>
          <img src='https://fakeimg.pl/100x100/' alt={product.title} />
          <aside className={styles.aside}>
            <p>價錢：{product.price}</p>
            <p>描述：{product.description}</p>
            <section>
              <button onClick={() => cartAddItem(product)}>加入購物車</button>
            </section>
          </aside>
        </article>
        {/* <footer></footer> */}
      </main>
    </article>
  );
};

export default ProductModal;
