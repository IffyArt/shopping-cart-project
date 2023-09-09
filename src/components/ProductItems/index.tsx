/* eslint-disable @next/next/no-img-element */
import {
  apiGetProductItem,
  apiGetProducts,
} from '@/components/servers/products';
import { Product } from '@/models/product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductModal from './ProductModal';
import styles from './styles.module.css';

type Props = {};

const ProductItems = (props: Props) => {
  const router = useRouter();
  const { keyword } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await apiGetProducts((keyword as string) ?? '');
      setProducts(data);
    };
    getData();
    return () => {};
  }, [keyword]);

  const getDetailInfo = async (id: number) => {
    const data = await apiGetProductItem(id);
    setProduct(data);
  };

  return (
    <article>
      {product && <ProductModal product={product} setProduct={setProduct} />}
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
