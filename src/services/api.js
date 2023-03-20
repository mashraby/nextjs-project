import { instance } from "@/config/axios.instance";

export const getProducts = () => {
  return instance.get("/products").then((res) => res.data);
};

export const getProductById = (id) => {
  return instance.get(`/products/${id}`).then((res) => res.data);
};
