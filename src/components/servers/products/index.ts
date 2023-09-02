import { Product } from '@/models/product';
import instance from '../shared/instance';

// 取的產品列表
export const apiGetProducts = async () =>
  instance.get<Product[]>('/products').then((response) => response.data);

// 取得產品項目
export const apiGetProductItem = async (id: number) =>
  instance.get<Product>(`/products/${id}`).then((response) => response.data);
