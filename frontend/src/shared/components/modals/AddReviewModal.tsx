import { useQueryClient } from '@tanstack/react-query'
import { Star } from 'lucide-react'
import { useState } from 'react'

import { useReviews } from '../../hooks'
import type { IReview } from '../../types'
import { Button, FileInput, Input, Modal, Textarea } from '../ui'

interface Props {
	setOpen: (bool: boolean) => void
	productId: string
	setReviews: (reviews: IReview[]) => void
}

export const AddReviewModal = ({ setOpen, setReviews, productId }: Props) => {
	const [imageUrl, setImageUrl] = useState('')
	const queryClient = useQueryClient()
	const [rating, setRating] = useState<null | number>(null)
	const [hoverRating, setHoverRating] = useState<number | null>(null)
	const { createReview } = useReviews()
	const { mutate } = createReview({
		onSuccess: () => {
			setReviews([])
			queryClient.invalidateQueries({
				queryKey: ['reviews', {}]
			})
			setOpen(false)
		}
	})

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const { text, title, username } = Object.fromEntries(formData)

		if (!rating) return

		mutate({
			rating,
			username: username as string,
			text: text as string,
			title: title as string,
			productId,
			images: [imageUrl]
		})
	}

	return (
		<Modal className='w-185.75' onClose={() => setOpen(false)}>
			<h4 className='font-second text-3xl font-black'>Написать отзыв</h4>
			<div className='mt-10'>
				<p className='text-[#ababab]'>Оценка</p>
				<div className='flex flex-row gap-1'>
					{[...new Array(5)].map((_, index) => {
						const starIndex = index + 1
						const isActive = hoverRating
							? starIndex <= hoverRating
							: rating
								? starIndex <= rating
								: false
						return (
							<button
								onClick={() => setRating(index + 1)}
								key={index}
								onMouseEnter={() => setHoverRating(starIndex)}
								onMouseLeave={() => setHoverRating(null)}
							>
								<Star
									size={40}
									className={`transition ${
										isActive
											? 'fill-black! stroke-black'
											: 'fill-transparent'
									}`}
								/>
							</button>
						)
					})}
				</div>
			</div>
			<form
				onSubmit={onSubmit}
				className='mt-5 flex w-full flex-col gap-5'
			>
				<Input
					name='username'
					className='w-full'
					variant={'bordered'}
					placeholder='Ваше имя'
				/>
				<Input
					name='title'
					className='w-full'
					variant={'bordered'}
					placeholder='Заголовок'
				/>
				<Textarea
					name='text'
					variant='bordered'
					placeholder='Комментарий'
				/>
				<FileInput setImageUrl={setImageUrl} />
				<Button className='w-fit bg-black hover:opacity-80'>
					Отправить отзыв
				</Button>
			</form>
			{imageUrl && (
				<div className='mt-10 flex w-full items-center justify-center'>
					<img
						src={`${import.meta.env.VITE_PUBLIC_SERVER_URL}${imageUrl.slice(1)}`}
						alt='REVIEW'
						className='h-full w-full max-w-100 rounded-2xl'
					/>
				</div>
			)}
		</Modal>
	)
}
