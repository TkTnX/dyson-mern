import { MoveRight } from 'lucide-react'
import { Link } from 'react-router'

import type { ICategory } from '../../shared/types'

type Props = {
	category: ICategory
}

export const CategoryItem = ({ category }: Props) => {
	return (
		<Link
			to={`/categories/${category.slug}`}
			className='group overflow-hidden rounded-xl bg-white'
		>
			<img src={category.image} alt={category.name} />
			<div className='flex flex-col gap-2.5 px-3 pt-2.5 pb-3.5 transition group-hover:bg-black group-hover:text-white lg:px-10 lg:pt-5 lg:pb-7.5'>
				<h4 className='font-second text-base font-black lg:text-3xl'>
					{category.name}
				</h4>
				<p className='flex items-center gap-1 text-xs md:gap-5 lg:text-2xl'>
					Подробнее <MoveRight />{' '}
				</p>
			</div>
		</Link>
	)
}
