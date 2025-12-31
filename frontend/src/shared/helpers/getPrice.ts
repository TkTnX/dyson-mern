import type { IProduct } from "../types"

export function getPrice(product: IProduct) {
	const {discount, price} = product
	if (discount) {
		return price - (price * discount) / 100
	} else {
		return price
	}
}
