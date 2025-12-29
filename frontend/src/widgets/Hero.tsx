import { Link } from 'react-router'

import { Button } from '../shared/components'

export const Hero = () => {
	return (
		<section className='relative mt-0! h-98 overflow-hidden bg-[#dddddd] sm:h-auto'>
			<div className='container flex items-center justify-between'>
				<div className='max-w-72.5 flex-1 sm:max-w-90.75 md:max-w-139'>
					<h1 className='font-second relative z-2 mt-12.5 text-2xl leading-none font-black sm:mt-0 sm:text-[30px] md:text-[46px]'>
						Уникальные технологии для ухода за волосами
					</h1>
					<p className='relative z-2 mt-5 text-xs md:mt-10 md:text-2xl'>
						Идеальная укладка для всех типов волос вместе с Dyson
					</p>
					<Button className='relative z-2 mt-10 p-0! md:mt-22.5'>
						<Link
							to={'/catalog'}
							className='block px-6.5 py-2 md:px-12.5 md:py-3.75'
						>
							Подробнее
						</Link>
					</Button>
				</div>
				<div className='absolute -right-10 -bottom-10 flex-1 sm:static'>
					<img
						className='max-h-68.5 sm:max-h-212.5'
						src='/images/hero/image.jpg'
						alt='HERO IMAGE'
					/>
				</div>
			</div>
		</section>
	)
}
