import { Link } from 'react-router'

import { ProductCounter } from '../../features'
import { Button } from '../../shared/components'
import type { IProduct } from '../../shared/types'

interface Props {
	product: IProduct
	className?: string
}

export const ProductItem = ({ product, className }: Props) => {
	const discount =
		product.discount && (product.price / 100) * product.discount
	return (
		<div className={`relative flex flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-sm ${className}`}>
			<Link
				to={`/products/${product._id}`}
				className='absolute inset-0'
			></Link>
			<img src='/images/temp/fan2.jpg' alt='FAN 2' />
			<div className='flex flex-1 flex-col gap-10 pt-10'>
				<div className='flex-1'>
					<h4 className='px-2.5 text-xs font-light lg:px-10 lg:text-2xl'>
						{product.title}
					</h4>
					<div className='mt-6 flex items-center justify-between px-2.5 lg:px-10'>
						<div className='text-green flex items-center gap-2 sm:gap-5'>
							<div
								className={`vsm:block hidden h-3.5 w-3.5 rounded-full ${
									product.isStock ? 'bg-green' : 'bg-red-500'
								}`}
							/>
							<p
								className={`text-xs lg:text-base ${
									!product.isStock && 'text-red-500'
								}`}
							>
								{product.isStock ? 'В наличии' : 'Отсутствует'}
							</p>
						</div>
						{product.discount && (
							<div className='bg-accent rounded-sm px-2 py-2 text-sm text-white sm:text-base lg:px-7 lg:text-2xl'>
								-{product.discount}%
							</div>
						)}
					</div>
					<div className='flex flex-wrap items-end justify-between px-2.5 lg:flex-col lg:px-10 xl:flex-row'>
						<h6 className='font-second text-xl font-black lg:text-5xl'>
							{/* TODO: ADD FORMAT FUNCTION */}
							{product.discount
								? (product.price - discount!).toFixed(0)
								: product.price.toFixed(0)}
							Р
						</h6>

						{product.discount && (
							<p
								className={`font-second text-xs font-black text-gray-500 line-through lg:text-2xl`}
							>
								{product.price.toFixed(0)} Р
							</p>
						)}
					</div>
				</div>
				<div className='relative z-2 flex flex-col items-stretch 2xl:flex-row'>
					<ProductCounter />
					<Button className='hover:bg-accent! flex-1 rounded-t-none bg-black px-0 2xl:rounded-l-none'>
						В корзину
					</Button>
				</div>
			</div>
		</div>
	)
}
