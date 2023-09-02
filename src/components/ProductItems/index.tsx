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
            {product.title}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProductItems;
