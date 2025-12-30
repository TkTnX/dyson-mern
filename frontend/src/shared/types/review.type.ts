import type { IProduct } from "./product.type";

export interface IReview {
    _id: string,
    title: string,
    text: string,
    rating: number,
    images: string[],
    product: string | IProduct,
    username: string,
    created_at: Date,
    updated_at: Date
}

export type CreateReviewType = {
    username: string
    title: string
    rating: number
    text: string
    images?: string[]
    productId: string
}