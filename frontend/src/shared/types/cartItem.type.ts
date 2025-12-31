import type { IProduct } from "./product.type";

export interface ICartItem {
    product: IProduct
    quantity: number
}