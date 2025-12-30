import { Star } from 'lucide-react'

interface Props {
	rating: number
	className?: string
}

export const Rating = ({ rating, className }: Props) => {
	return (
		<div className={`flex items-center gap-1 ${className}`}>
			{[...new Array(rating)].map((_, index) => (
				<Star
					className='h-4 w-4 sm:h-auto sm:w-auto'
					fill='#000'
					color='#000'
					key={index}
				/>
			))}
			{[...new Array(5 - rating)].map((_, index) => (
				<Star key={index} />
			))}
		</div>
	)
}
