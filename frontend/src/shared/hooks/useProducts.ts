import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../libs";
import type { IProduct } from "../types";

export function useProducts() {
  const getProducts = () =>
    useQuery({
      queryKey: ["get products"],
      queryFn: async (): Promise<IProduct[]> => {
        const res = await axiosInstance.get("products");

        return res.data;
      },
    });

  const getProduct = (productId: string) =>
    useQuery({
      queryKey: ["get product by id", productId],
      queryFn: async (): Promise<IProduct> => {
        const res = await axiosInstance.get(`products/${productId}`);

        return res.data;
      },
    });

  return {
    getProducts,
    getProduct,
  };
}
