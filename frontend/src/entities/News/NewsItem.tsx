import { Link } from 'react-router'

import type { INewsItem } from '../../shared/types'

interface Props {
	className?: string
	item: INewsItem
}

export const NewsItem = ({ className, item }: Props) => {
	return (
		<div className={className}>
			<div>
				{item.image ? (
					<img
						className='rounded-sm'
						src={item.image}
						alt='News item'
					/>
				) : (
					<div className='h-75 w-full bg-gray-500' />
				)}
			</div>
			<p className='mt-7.5 text-xs font-light text-[#909090] md:text-lg'>
				{new Date(item.created_at).toLocaleDateString('ru-RU', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				})}
			</p>
			<h3 className='mt-5 text-sm font-semibold md:text-xl'>
				{item.title}
			</h3>
			<p className='mt-4 text-xs font-light md:text-lg'>{item.content}</p>
			<Link
				to={`/news/${item._id}`}
				className='text-accent mt-5 block text-xs underline sm:text-base'
			>
				Читать далее
			</Link>
		</div>
	)
}
