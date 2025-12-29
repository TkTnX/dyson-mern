import { MoveDownRight } from 'lucide-react'
import { Link } from 'react-router'

import { NewsItem } from '../entities'
import { Button } from '../shared/components'

export const News = () => {
	return (
		<section className='container'>
			<h2 className='title'>Новости</h2>
			<div className='mt-17.5 flex items-stretch gap-5 last:hidden'>
				<NewsItem />
				<NewsItem />
				<NewsItem className='hidden sm:block' />
			</div>
			<Button className='mx-auto mt-20 flex' variant='outline'>
				<Link
					className='flex items-center justify-center gap-7.5'
					to={'/news'}
				>
					<span>Показать ещё</span> <MoveDownRight />
				</Link>
			</Button>
		</section>
	)
}
