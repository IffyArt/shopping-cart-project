/* eslint-disable @next/next/no-img-element */
import {
  apiGetProductItem,
  apiGetProducts,
} from '@/components/servers/products';
import { Product } from '@/models/product';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Props = {};

const ProductItems = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiGetProducts();
      setProducts(data);
    };
    getData();
    return () => {};
  }, []);

  const getDetailInfo = async (id: number) => {
    const data = await apiGetProductItem(id);
    console.log(data);
  };

  return (
    <article>
      <ul className={styles.productItems}>
        {products.map((product) => (
          <li key={product.id} onClick={() => getDetailInfo(product.id)}>
            <aside>
              <img src='https://fakeimg.pl/100x100/' alt={product.title} />
            </aside>
            <article className={styles.productInfo}>
              <h2>{product.title}</h2>
              <p>價錢：{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductItems;
