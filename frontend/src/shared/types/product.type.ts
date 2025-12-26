export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  images: string[];
  isStock: boolean;
}
