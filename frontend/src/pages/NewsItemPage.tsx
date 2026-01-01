import { useParams } from 'react-router'

import { Breadcrumbs, ErrorMessage, Loader } from '../shared/components'
import { useNews } from '../shared/hooks'

export const NewsItemPage = () => {
	const { id } = useParams()

	const { getNewsItem } = useNews()
	const { data, isPending, error } = getNewsItem(id!)

	if (error) return <ErrorMessage message={error.message} />
	if (isPending) return <Loader />
	return (
		<>
			<Breadcrumbs
				items={[
					{ label: 'Новости', href: '/news' },
					{ label: data?.title || '' }
				]}
			/>
			<section className='container'>
				{data.image && (
					<img
						src={data.image}
						alt={data.title}
						className='w-full rounded-xl object-cover'
					/>
				)}
				<h1 className='mt-20 text-5xl font-black'>{data.title}</h1>
				<p className='mt-5 text-3xl leading-normal'>{data.content}</p>
			</section>
		</>
	)
}
