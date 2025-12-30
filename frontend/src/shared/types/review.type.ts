import type { IProduct } from "./product.type";

export interface IReview {
    _id: string,
    title: string,
    text: string,
    rating: number,
    images: string[],
    product: string | IProduct,
    created_at: Date,
    updated_at: Date
}