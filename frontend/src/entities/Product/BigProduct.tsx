import { Heart } from 'lucide-react'
import { useState } from 'react'

import { AddToCartButton, ProductCounter } from '../../features'
import {  Rating } from '../../shared/components'
import type { IProduct } from '../../shared/types'

interface Props {
	product: IProduct
}

export const BigProduct = ({ product }: Props) => {
	const [currentImage, setCurrentImage] = useState(0)
	const discount =
		product.discount && (product.price / 100) * product.discount
	return (
		<div className='flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-start'>
			<div className='relative flex w-fit flex-col-reverse items-start gap-6 sm:flex-row'>
				<div className='flex w-full sm:flex-col'>
					{product.images.map((image, index) => (
						<button
							onClick={() => setCurrentImage(index)}
							key={index}
						>
							<img
								className={`h-16 w-16 object-cover md:h-23.75 md:w-23.75 ${
									currentImage !== index && 'opacity-50'
								}`}
								src={image}
							/>
						</button>
					))}
				</div>
				<img
					className='lg:w-137.5'
					src={product.images[currentImage]}
					alt={product.title}
				/>
				<button className='absolute top-0 right-0'>
					<Heart size={40} />
				</button>
			</div>
			<div className='lg:max-w-138.75'>
				<h2 className='text-base font-black sm:text-2xl md:text-4xl'>
					{product.title}
				</h2>
				<p className='font-second mt-10 text-xs sm:text-sm md:text-base'>
					{product.description}
				</p>
				<Rating className='mt-4' rating={product.rating} />
				<div className='mt-6 flex items-center justify-between'>
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
				<div className='mt-6 flex flex-wrap items-end justify-between lg:flex-col xl:flex-row'>
					<h6 className='font-second text-5xl font-black'>
						{/* TODO: ADD FORMAT FUNCTION */}
						{product.discount
							? (product.price - discount!).toFixed(0)
							: product.price.toFixed(0)}
						Р
					</h6>

					{product.discount && (
						<p
							className={`font-second text-2xl font-black text-[#ababab] line-through`}
						>
							{product.price.toFixed(0)} Р
						</p>
					)}
				</div>
				<div className='relative z-2 mt-8 flex flex-col items-stretch gap-2.5 sm:flex-row sm:gap-5'>
					<ProductCounter className='flex! rounded-sm! lg:flex!' />
					<AddToCartButton product={product} />
				</div>
			</div>
		</div>
	)
}
