import { MoveDownRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ReviewItem } from '../entities'
import { Button, ErrorMessage, Skeleton } from '../shared/components'
import { useReviews } from '../shared/hooks'
import type { IReview } from '../shared/types'

export const Reviews = () => {
	const [reviews, setReviews] = useState<IReview[]>([])
	const [page, setPage] = useState(0)
	const { getReviews } = useReviews()
	const { data, isPending, error } = getReviews({
		limit: '6',
		page: String(page)
	})

	useEffect(() => {
		if (data?.items) {
			setReviews([...reviews, ...data.items])
		}
	}, [data])

	if (error) return <ErrorMessage message={error.message} />
	console.log(data)
	return (
		<section className='container'>
			<h2 className='title'>
				Отзывы <span className='text-accent'>{data?.total}</span>
			</h2>
			{/* TODO: MOVE TO FEATURES */}
			<div className='vsm:items-center vsm:flex-row mt-7 flex flex-col justify-between gap-4 sm:justify-start sm:gap-17.5'>
				<div>
					<p className='text-xl'>
						<span className='text-3xl font-medium'>5</span>/5
					</p>
					<div className='flex items-center gap-1'>
						{[...new Array(5)].map((_, index) => (
							<Star
								className='h-4 w-4 sm:h-auto sm:w-auto'
								fill='#000'
								color='#000'
								key={index}
							/>
						))}
					</div>
				</div>

				<Button variant={'outline'}>Написать отзыв</Button>
			</div>

			{/* REVIEWS LIST */}
			<div className='mt-12.5 border-t border-[#ababab]'>
				{isPending
					? [...new Array(5)].map((_, index) => (
							<Skeleton key={index} />
						))
					: reviews.map(review => (
							<ReviewItem key={review._id} review={review} />
						))}
			</div>
			{page + 1 !== data?.totalPages && (
				<Button
					onClick={() => setPage(page + 1)}
					className='mx-auto mt-20 flex items-center justify-center gap-7.5'
					variant='outline'
				>
					<span>Показать ещё</span> <MoveDownRight />{' '}
				</Button>
			)}
		</section>
	)
}
