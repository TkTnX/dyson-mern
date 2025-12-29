import type { IProduct } from './product.type'

export interface ICategory {
	_id: string
	name: string
	slug: string
	image: string
	products?: IProduct[]
}
