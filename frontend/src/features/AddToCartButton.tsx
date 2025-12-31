import { Button } from '../shared/components'
import { useCartStore } from '../shared/stores'
import type { IProduct } from '../shared/types'

interface Props {
	product: IProduct
}

export const AddToCartButton = ({ product }: Props) => {
	const { addToCart } = useCartStore()
	return (
		<Button
			onClick={() => addToCart(product, 1)}
			className='hover:bg-accent! flex-1 rounded-t-none bg-black px-0 2xl:rounded-l-none'
		>
			В корзину
		</Button>
	)
}
