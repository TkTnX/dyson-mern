import { MoveDownRight } from 'lucide-react'
import { Link } from 'react-router'

import { Button, ErrorMessage } from '../shared/components'
import { useNews } from '../shared/hooks'

import { NewsList } from './NewsList'

export const News = () => {
	const { getNews } = useNews()
	const { data, isPending, error } = getNews({ limit: '3' })

	if (error) return <ErrorMessage message={error.message} />

	return (
		<section className='container'>
			<h2 className='title'>Новости</h2>
			<NewsList isPending={isPending} items={data || []} />
			<Button className='mx-auto mt-20 flex p-0!' variant='outline'>
				<Link
					className='flex items-center justify-center gap-7.5 px-6.5 py-2 md:px-12.5 md:py-3.75'
					to={'/news'}
				>
					<span>Показать ещё</span> <MoveDownRight />
				</Link>
			</Button>
		</section>
	)
}
