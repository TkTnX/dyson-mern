import { MoveDownRight, Star } from 'lucide-react'

import { ReviewItem } from '../entities'
import { Button } from '../shared/components'

export const Reviews = () => {
	return (
		<section className='container'>
			<h2 className='title'>
				Отзывы <span className='text-accent'>151</span>
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
				{[...new Array(5)].map((_, index) => (
					<ReviewItem key={index} />
				))}
			</div>
			<Button
				className='mx-auto mt-20 flex items-center justify-center gap-7.5'
				variant='outline'
			>
				<span>Показать ещё</span> <MoveDownRight />{' '}
			</Button>
		</section>
	)
}
