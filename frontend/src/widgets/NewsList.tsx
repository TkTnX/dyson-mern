import { NewsItem } from '../entities'
import { Skeleton } from '../shared/components'
import type { INewsItem } from '../shared/types'

interface Props {
	isPending: boolean
	items: INewsItem[]
	className?:string
}

export const NewsList = ({ isPending, items, className }: Props) => {
	return (
		<div className={`mt-17.5 flex items-stretch gap-5 ${className}`}>
			{isPending
				? [...new Array(3)].map((_, index) => (
						<Skeleton className='h-150 w-full' key={index} />
					))
				: items?.map(newsItem => (
						<NewsItem key={newsItem._id} item={newsItem} />
					))}
		</div>
	)
}
