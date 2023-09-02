import ProductItems from '@/components/ProductItems';
import { CartContext } from '@/contexts/CartContext';
import Head from 'next/head';
import { useContext } from 'react';

export default function Home() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProductItems />
      {/* <button
        onClick={() =>
          setCart([
            ...cart,
            {
              id: 1,
              title: 'test',
              quantity: 1,
              price: 100,
              description: 'test',
              category: {
                id: 5,
                name: 'Others',
                image: 'https://placeimg.com/640/480/any?r=0.591926261873231',
              },
              image: 'https://placeimg.com/640/480/any?r=0.9178516507833767',
            },
          ])
        }
      >
        按鈕
      </button> */}
    </>
  );
}
