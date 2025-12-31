import { create } from 'zustand'

import type { ICartItem, IProduct } from '../types'

interface ICartStore {
	cartItems: ICartItem[]
	quantity: number
	setQuantity: (quantity: number) => void
	addToCart: (product: IProduct, quantity: number) => void
	removeCartItem: (productId: string) => void
}

export const useCartStore = create<ICartStore>((set, get) => ({
	cartItems: [],
	quantity: 1,
	setQuantity: quantity => {
		set({ quantity })
	},
	addToCart: product => {
		const cartItem = get().cartItems.find(
			item => item.product._id === product._id
		)
		if (cartItem) {
			cartItem.quantity += get().quantity
		} else {
			set({
				cartItems: [
					...get().cartItems,
					{ product, quantity: get().quantity }
				]
			})
		}
		console.log(get().cartItems)
		set({ quantity: 1 })
	},
	removeCartItem: productId => {
		const cartItem = get().cartItems.find(
			item => item.product._id === productId
		)

		if (cartItem) {
			set({
				cartItems: get().cartItems.filter(
					item => item.product._id !== productId
				)
			})
		}
	}
}))
