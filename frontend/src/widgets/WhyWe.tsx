import { WHYWE_ITEMS } from '../shared/constants'

export const WhyWe = () => {
	return (
		<section className='container'>
			<h2 className='font-second text-5xl font-black'>
				Почему выбирают нас
			</h2>
			<div className='mt-14.5 grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
				{WHYWE_ITEMS.map((item, index) => (
					<div
						className='flex items-center justify-center gap-3.5 bg-white px-2 py-10 shadow-lg sm:flex-col sm:p-12.5 sm:text-center'
						key={index}
					>
						<img
							className='max-w-18.5 sm:max-w-full'
							src={item.image}
							alt={item.title}
						/>
						<div className='flex flex-col gap-3.5'>
							<h5 className='font-second text-sm font-black md:text-xl'>
								{item.title}
							</h5>
							<p className='text-xs sm:max-w-55 sm:text-base'>
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
