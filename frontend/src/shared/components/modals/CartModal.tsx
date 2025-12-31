import { CartItem } from '../../../entities'
import { getPrice } from '../../helpers'
import { useCartStore } from '../../stores'
import { Button, Modal } from '../ui'

interface Props {
	setOpen: (bool: boolean) => void
}

export const CartModal = ({ setOpen }: Props) => {
	const { cartItems } = useCartStore()

	const totalPrice = cartItems.reduce((acc, obj) => {
		const price = getPrice(obj.product)
		console.log(price)
		console.log(obj)
		return acc + price * obj.quantity
	}, 0)
	return (
		<Modal className='min-w-185.75' onClose={() => setOpen(false)}>
			<h4 className='font-second text-3xl font-black'>Корзина</h4>
			<div className='mt-10 flex flex-col border-t border-t-[#ababab]'>
				{cartItems.length > 0 ? (
					cartItems.map(cartItem => (
						<CartItem
							cartItem={cartItem}
							key={cartItem.product._id}
						/>
					))
				) : (
					<p className='my-10 text-center text-gray-500'>
						Корзина пуста!
					</p>
				)}
			</div>
			<h6 className='mt-10 text-right text-4xl font-medium'>
				Итого: {totalPrice}Р
			</h6>
			<Button disabled={cartItems.length === 0} className='mt-10 w-full'>Оформить заказ</Button>
		</Modal>
	)
}
