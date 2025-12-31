import { X } from 'lucide-react'

import { getPrice } from '../../shared/helpers'
import type { ICartItem } from '../../shared/types'
import { useCartStore } from '../../shared/stores'

interface Props {
	cartItem: ICartItem
}

export const CartItem = ({ cartItem }: Props) => {
	const {removeCartItem} = useCartStore()
	const product = cartItem.product
	const price = getPrice(product)
	return (
		<div className='relative flex items-center gap-10 border-b border-b-[#ababab] py-4'>
			<img
				className='h-30 w-30'
				src={product.images[0]}
				alt={product.title}
			/>
			<div className='text-2xl font-bold'>
				<h6>{product.title}</h6>
				<p>
					{price}Р x{' '}
					<span className='text-accent'>{cartItem.quantity}</span>
				</p>
			</div>
			<p className='text-accent ml-auto text-5xl font-black'>
				{price * cartItem.quantity}Р
			</p>
			<button onClick={() => removeCartItem(cartItem.product._id)} className='absolute top-4 right-0'>
				<X />
			</button>
		</div>
	)
}
