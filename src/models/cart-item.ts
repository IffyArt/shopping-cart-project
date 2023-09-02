import { ProductCategory } from './product';

export type CartItem = {
  // id
  id: number;
  // 數量
  quantity: number;
  // 價錢
  price: number;
  // 簡介
  description: string;
  // 類別
  category: ProductCategory;
  // 圖片
  image: string;
};
