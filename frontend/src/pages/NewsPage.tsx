import { Breadcrumbs, ErrorMessage } from '../shared/components'
import { useNews } from '../shared/hooks'
import { NewsList } from '../widgets'

export const NewsPage = () => {
	const { getNews } = useNews()
	const { data, isPending, error } = getNews()

	if (error) return <ErrorMessage message={error.message} />

    return (
		<>
			<Breadcrumbs items={[{ label: 'Новости' }]} />
			<section className='container'>
				<h1 className='font-second text-5xl font-black'>
					Новости{' '}
					<span className='text-accent'>({data?.length})</span>
				</h1>
				<NewsList
					className='vsm:grid-cols-2 grid gap-2 lg:grid-cols-4 lg:gap-5'
					items={data || []}
					isPending={isPending}
				/>
			</section>
		</>
	)
}
