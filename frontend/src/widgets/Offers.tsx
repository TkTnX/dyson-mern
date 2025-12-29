/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper JS
import 'swiper/swiper-bundle.css'

import { ProductItem } from '../entities'
import { ErrorMessage, Select, Skeleton } from '../shared/components'
import { SORT_SELECT_ITEMS } from '../shared/constants'
import { useProducts } from '../shared/hooks'

export const Offers = () => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [sortBy, setSortBy] = useState<{ key: string; value: string }>({
		key: '_id',
		value: 'asc'
	})
	const sortByValue = `${sortBy.key}-${sortBy.value}`

	const { getProducts } = useProducts()
	const { error, data, isPending } = getProducts({
		sortBy: sortByValue,
		important: 'discount'
	})
	if (error) return <ErrorMessage message={error.message} />

	const slides = []

	if (data) {
		for (let i = 0; i < data?.length; i += 2) {
			slides.push([data[i], data[i + 1]])
		}
	}
	const totalPages = Math.ceil(slides.length / 3)
	return (
		<section className='relative bg-[#f8f8f8]'>
			<div className='container py-37.5'>
				<h2 className='title'>
					Спецпредложения{' '}
					<span className='text-accent'>{data?.length}</span>
				</h2>
				<Select
					setSort={setSortBy}
					sortBy={sortByValue}
					options={SORT_SELECT_ITEMS}
				/>
				<Swiper
					onSlideChange={swiper =>
						setCurrentSlide(swiper.realIndex + 1)
					}
					modules={[Navigation, Pagination]}
					pagination={{
						type: 'fraction'
					}}
					navigation={{
						prevEl: '.prev',
						nextEl: '.next'
					}}
					className='mt-20!'
					spaceBetween={20}
					slidesPerView={3}
				>
					{isPending
						? [...new Array(6)].map((_, index) => (
								<SwiperSlide className='flex! flex-col! gap-5!'>
									<Skeleton
										className='h-203.5 w-full'
										key={index}
									/>
									<Skeleton
										className='h-203.5 w-full'
										key={index}
									/>
								</SwiperSlide>
							))
						: slides.map((product, index) => (
								<SwiperSlide
									className='flex! h-[unset]! flex-col! gap-5!'
									key={index}
								>
									<ProductItem product={product[0]} />
									{product[1] && (
										<ProductItem product={product[1]} />
									)}
								</SwiperSlide>
							))}
				</Swiper>
				<div className='mt-10 flex items-center gap-5 md:mt-32.5'>
					<button className='hover:border-accent hover:text-accent prev flex h-9 w-9 items-center justify-center rounded-sm border transition md:h-16 md:w-16'>
						<MoveLeft />
					</button>
					<button className='hover:border-accent hover:text-accent next flex h-9 w-9 items-center justify-center rounded-sm border transition md:h-16 md:w-16'>
						<MoveRight />
					</button>
					<p className='pagination pl-2.5 md:text-2xl'>
						{currentSlide} из {totalPages}
					</p>
				</div>
			</div>
		</section>
	)
}
