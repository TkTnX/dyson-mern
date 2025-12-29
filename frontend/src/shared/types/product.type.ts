import type { ICategory } from './category.type'
import type { IComplecation } from './complectation.type'
import type { ISpecification } from './specification.type'

export interface IProduct {
	_id: string
	title: string
	description: string
	price: number
	discount?: number
	images: string[]
	isStock: boolean

	complectation: IComplecation[]
	specifications: ISpecification[]
	category: ICategory
}
