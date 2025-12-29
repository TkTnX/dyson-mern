import { useState } from 'react'
import { useParams } from 'react-router'

import { ProductItem } from '../entities'
import { Breadcrumbs, ErrorMessage, Loader, Select } from '../shared/components'
import { SORT_SELECT_ITEMS } from '../shared/constants'
import { useProducts } from '../shared/hooks'

export const CategoryPage = () => {
	const [sortBy, setSortBy] = useState<{ key: string; value: string }>({
		key: '_id',
		value: 'asc'
	})
	const sortByValue = `${sortBy.key}-${sortBy.value}`

	const { slug } = useParams()
	const { getProducts } = useProducts()
	const { data, isPending, error } = getProducts({
		category: slug!,
		sortBy: sortByValue
	})

	if (isPending) return <Loader />

	if (error) return <ErrorMessage message={error.message} />
	return (
		<>
			<div className='container flex items-center justify-center'>
				<Breadcrumbs
					items={[{ label: data[0]?.category.name || '' }]}
				/>
				<Select
					setSort={setSortBy}
					className='flex-1'
					options={SORT_SELECT_ITEMS}
					sortBy={sortByValue}
				/>
			</div>
			<section className='container'>
				<div className='mt-20 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-5'>
					{data.map(product => (
						<ProductItem product={product} key={product._id} />
					))}
				</div>
			</section>
		</>
	)
}
