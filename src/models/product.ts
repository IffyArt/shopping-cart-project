export type Product = {
  // id
  id: number;
  // 標題
  title: string;
  // 價格
  price: number;
  // 簡介
  description: string;
  // 類別
  category: ProductCategory;
  // 圖片
  images: string[];
};

export type ProductCategory = {
  // id
  id: number;
  // 名稱
  name: string;
  // 圖片
  image: string;
};
