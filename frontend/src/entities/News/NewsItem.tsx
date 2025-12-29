import { Link } from 'react-router'

interface Props {
	className?: string
}

export const NewsItem = ({ className }: Props) => {
	return (
		<div className={className}>
			<div>
				<img
					className='rounded-sm'
					src='/images/temp/news.jpg'
					alt='News item'
				/>
			</div>
			<p className='mt-7.5 text-xs font-light text-[#909090] md:text-lg'>
				21 декабря 2022
			</p>
			<h3 className='mt-5 text-sm font-semibold md:text-xl'>
				Есть ли безопасные выпрямители для волос
			</h3>
			<p className='mt-4 text-xs font-light md:text-lg'>
				Добавьте объем и рельеф коротким волосам. Посмотрите, как
				создать мягкие, легкие локоны и волны на коротких волосах и
				волосах средней длины.
			</p>
			<Link
				to={'/news/1'}
				className='text-accent mt-5 block text-xs underline sm:text-base'
			>
				Читать далее
			</Link>
		</div>
	)
}
