import { defineStore } from 'pinia';
import { PRODUCT_CONTROLER } from '../api/endpoint';
import { Product } from '../api/dto';
import { useApi } from '../composables/useApi';
export const useProductsStore = defineStore('Products', () => {
  const { GET } = useApi();
  const GetProductList = ref<Product[]>([]);
  const ProductDetails = ref<Product>(new Product());
  async function GetProductsData() {
    const response = await GET<Product[]>(PRODUCT_CONTROLER.GetAll);
    GetProductList.value = response.data;

    return response;
  }
  async function GetDetailsProducts(id:string) {
    const response = await GET<Product>(`${PRODUCT_CONTROLER.GetAll}/${id}`);
    ProductDetails.value = response.data;

    return response;
  }
  return {
    GetProductsData,
    GetProductList,
    GetDetailsProducts,
    ProductDetails

  };
});
