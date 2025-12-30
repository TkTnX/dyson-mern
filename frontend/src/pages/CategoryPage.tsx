import { MoveLeft, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router'

import { ProductItem } from '../entities'
import { Breadcrumbs, ErrorMessage, Loader, Select } from '../shared/components'
import { SORT_SELECT_ITEMS } from '../shared/constants'
import { useProducts } from '../shared/hooks'

export const CategoryPage = () => {
	const [page, setPage] = useState(0)
	const [sortBy, setSortBy] = useState<{ key: string; value: string }>({
		key: '_id',
		value: 'asc'
	})
	const sortByValue = `${sortBy.key}-${sortBy.value}`

	const { slug } = useParams()
	const { getProducts } = useProducts()
	const { data, isPending, error } = getProducts({
		category: slug!,
		sortBy: sortByValue,
		limit: '6',
		page: String(page)
	})

	if (isPending) return <Loader />

	if (error) return <ErrorMessage message={error.message} />
	return (
		<>
			<Breadcrumbs
				items={[{ label: data.items[0]?.category.name || '' }]}
			/>
			<section className='container'>
				<h1 className='font-second text-5xl font-black'>
					{data.items[0].category.name}{' '}
					<span className='text-accent'>{data.totalProducts}</span>
				</h1>
				<Select
					setSort={setSortBy}
					className='flex-1'
					options={SORT_SELECT_ITEMS}
					sortBy={sortByValue}
				/>
				<div className='mt-20 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-5'>
					{data.items.map(product => (
						<ProductItem product={product} key={product._id} />
					))}
				</div>
				<div className='mt-10 flex items-center gap-5 md:mt-32.5'>
					<button
						onClick={() => setPage(page - 1)}
						disabled={page + 1 === 1}
						className='hover:border-accent hover:text-accent prev flex h-9 w-9 items-center justify-center rounded-sm border transition disabled:pointer-events-none disabled:opacity-50 md:h-16 md:w-16'
					>
						<MoveLeft />
					</button>
					<button
						disabled={page + 1 === data.totalPages}
						onClick={() => setPage(page + 1)}
						className='hover:border-accent hover:text-accent next flex h-9 w-9 items-center justify-center rounded-sm border transition disabled:pointer-events-none disabled:opacity-50 md:h-16 md:w-16'
					>
						<MoveRight />
					</button>
					<p className='pl-2.5 md:text-2xl'>
						{page + 1} из {data.totalPages}
					</p>
				</div>
			</section>
		</>
	)
}
