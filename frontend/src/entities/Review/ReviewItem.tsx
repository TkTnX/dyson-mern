import { Star } from 'lucide-react'

export const ReviewItem = () => {
	return (
		<div className='flex flex-col items-start gap-2.5 border-b border-[#ababab] py-10 sm:flex-row sm:gap-17.5'>
			<div className='flex flex-col gap-3.5'>
				<h4 className='text-xl font-medium'>Ольга</h4>
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
			<div>
				<div className='flex items-center justify-between'>
					<h4 className='text-xl font-semibold'>Это лучший фен!</h4>
					<p className='text-lg font-light text-[#909090]'>
						21/05/2022
					</p>
				</div>
				<p className='mt-2.5 text-lg font-light'>
					Пользуюсь около месяца, хочу поделиться впечатлениями.
					Во-первых, фен очень легкий, удобно лежит в руке, не
					скользит. Кнопка включения и выключения расположена удобно,
					а не где-то сбоку. Мощность у фена хорошая, волосы сушит
					быстро
				</p>
				<div className='mt-7.5 flex flex-wrap items-center gap-5'>
					{[...new Array(3)].map((_, index) => (
						<img
							src='/images/temp/review1.jpg'
							alt='REVIEW'
							className='h-full max-h-14 w-full max-w-14 rounded-2xl sm:max-h-20 sm:max-w-20'
							key={index}
						/>
					))}
				</div>
				<button className='text-accent mt-2.5 text-lg underline'>
					Смотреть все фото
				</button>
			</div>
		</div>
	)
}
