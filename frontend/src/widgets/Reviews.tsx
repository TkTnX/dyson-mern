import { MoveDownRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { ReviewItem } from '../entities'
import {
	AddReviewModal,
	Button,
	ErrorMessage,
	Skeleton
} from '../shared/components'
import { useReviews } from '../shared/hooks'
import type { IReview } from '../shared/types'

interface Props {
	productId?: string
}

export const Reviews = ({ productId }: Props) => {
	const { pathname } = useLocation()
	const [openModal, setOpenModal] = useState(false)
	const [reviews, setReviews] = useState<IReview[]>([])
	const [page, setPage] = useState(0)
	const { getReviews } = useReviews()
	const { data, isPending, error } = getReviews({
		limit: '6',
		page: String(page),
		product: productId
	})

	useEffect(() => {
		if (data?.items) {
			setReviews([...reviews, ...data.items])
		}
	}, [data])
	if (error) return <ErrorMessage message={error.message} />
	return (
		<>
			<section className='container'>
				<h2 className='title'>
					Отзывы <span className='text-accent'>{data?.total}</span>
				</h2>
				{pathname.includes('products') && (
					<div className='vsm:items-center vsm:flex-row mt-7 flex flex-col justify-between gap-4 sm:justify-start sm:gap-17.5'>
						<Button
							onClick={() => setOpenModal(true)}
							variant={'outline'}
						>
							Написать отзыв
						</Button>
					</div>
				)}



				{/* REVIEWS LIST */}
				<div className='mt-12.5 border-t border-[#ababab]'>
					{isPending ? (
						[...new Array(5)].map((_, index) => (
							<Skeleton key={index} />
						))
					) : reviews.length === 0 ? (
						<p className='mt-10 text-center text-gray-500'>
							Отзывов пока-что нет
						</p>
					) : (
						reviews.map(review => (
							<ReviewItem key={review._id} review={review} />
						))
					)}
				</div>
				{data?.totalPages !== 0 && page + 1 !== data?.totalPages && (
					<Button
						onClick={() => setPage(page + 1)}
						className='mx-auto mt-20 flex items-center justify-center gap-7.5'
						variant='outline'
					>
						<span>Показать ещё</span> <MoveDownRight />{' '}
					</Button>
				)}
			</section>
			{openModal && (
				<AddReviewModal setReviews={setReviews} productId={productId!} setOpen={setOpenModal} />
			)}
		</>
	)
}
