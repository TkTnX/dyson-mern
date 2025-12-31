import { useState } from 'react'

import { BigReviewModal, Rating } from '../../shared/components'
import type { IReview } from '../../shared/types'

interface Props {
	review: IReview
}

export const ReviewItem = ({ review }: Props) => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<div className='flex flex-col items-start gap-2.5 border-b border-[#ababab] py-10 sm:flex-row sm:gap-17.5'>
				<div className='flex flex-col gap-3.5'>
					<h4 className='text-xl font-medium'>{review.username}</h4>
					<Rating rating={review.rating} />
				</div>
				<div className='flex-1'>
					<div className='flex items-center justify-between'>
						<h4 className='text-xl font-semibold'>
							{review.title}
						</h4>
						<p className='text-lg font-light text-[#909090]'>
							{new Date(review.created_at).toLocaleDateString(
								'ru-RU',
								{
									day: '2-digit',
									month: '2-digit',
									year: 'numeric'
								}
							)}
						</p>
					</div>
					<p className='mt-2.5 text-lg font-light'>{review.text}</p>
					{review.images.length > 0 && (
						<>
							<div className='mt-7.5 flex flex-wrap items-center gap-5'>
								{review.images.map((image, index) => (
									<img
										src={`${import.meta.env.VITE_PUBLIC_SERVER_URL}${image.slice(1)}`}
										alt='REVIEW'
										className='h-full max-h-14 w-full max-w-14 rounded-2xl sm:max-h-20 sm:max-w-20'
										key={index}
									/>
								))}
							</div>
							<button
								onClick={() => setOpen(true)}
								className='text-accent mt-2.5 text-lg underline'
							>
								Смотреть все фото
							</button>
						</>
					)}
				</div>
			</div>
			{open && <BigReviewModal setOpen={setOpen} review={review} />}
		</>
	)
}
