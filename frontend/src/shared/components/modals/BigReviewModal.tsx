import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import type { IReview } from '../../types'
import { Modal } from '../ui'

interface Props {
	review: IReview
	setOpen: (bool: boolean) => void
}

export const BigReviewModal = ({ review, setOpen }: Props) => {
	const [currImage, setCurrImage] = useState(0)

	const onChangeImage = (action: 'prev' | 'next') => {
		if (action === 'prev' && currImage !== 0) {
			setCurrImage(currImage - 1)
		} else if (
			action === 'next' &&
			currImage + 1 !== review.images.length
		) {
			setCurrImage(currImage + 1)
		}
	}

	return (
		<Modal
			closeIconClassName='text-white'
			bgClassName='bg-black/90'
			onClose={() => setOpen(false)}
			className='max-h-screen max-w-200 overflow-y-auto bg-transparent! p-0! pt-10!'
		>
			<p className='pl-4 text-white'>
				{currImage + 1} / {review.images.length}
			</p>
			<div className='flex items-center gap-2 md:gap-5.5'>
				<button
					className='h-10 w-10 disabled:pointer-events-none disabled:opacity-50 md:h-19 md:w-19'
					disabled={currImage === 0}
					onClick={() => onChangeImage('prev')}
				>
					<ChevronLeft color='#fff' />
				</button>
				<div>
					<img
						className='max-h-175 object-cover'
						src={`${import.meta.env.VITE_PUBLIC_SERVER_URL}${review.images[currImage].slice(1)}`}
						alt={review.title}
					/>
				</div>
				<button
					disabled={currImage + 1 === review.images.length}
					className='h-10 w-10 disabled:pointer-events-none disabled:opacity-50 md:h-19 md:w-19'
					onClick={() => onChangeImage('next')}
				>
					<ChevronRight color='#fff' />
				</button>
			</div>
			<div className='mt-7.5 px-4 text-white'>
				<h6 className='text-sm font-medium md:text-xl'>
					{review.username}
				</h6>
				<p className='mt-2.5 text-sm font-light md:text-base'>
					{review.text}
				</p>
			</div>
		</Modal>
	)
}
