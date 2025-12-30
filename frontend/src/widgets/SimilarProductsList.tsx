import { MoveDownRight } from 'lucide-react'
import { Link } from 'react-router'

import { ProductItem } from '../entities'
import { Button, ErrorMessage, Skeleton } from '../shared/components'
import { useProducts } from '../shared/hooks'

interface Props {
	slug: string
}
export const SimilarProductsList = ({ slug }: Props) => {
	const { getProducts } = useProducts()
	const { data, isPending, error } = getProducts({
		category: slug,
		limit: '3'
	})
	if (error) return <ErrorMessage message={error.message} />

	return (
		<section className='container'>
			<h2 className='title'>Похожие товары</h2>
			<div className='vsm:grid-cols-2 mt-15 grid gap-5 md:grid-cols-3'>
				{isPending
					? [...new Array(3)].map((_, index) => (
							<Skeleton className='h-187.5 w-full' key={index} />
						))
					: data.items.map(product => (
							<ProductItem
								className={'last:hidden md:last:flex'}
								product={product}
								key={product._id}
							/>
						))}
			</div>
			<Button
				className='mx-auto mt-20 flex justify-center p-0!'
				variant='outline'
			>
				<Link
					className='flex items-center justify-center gap-7.5 px-6.5 py-2 md:px-12.5 md:py-3.75'
					to={`/categories/${data?.items[0].category.slug}`}
				>
					<span>Показать ещё</span> <MoveDownRight />{' '}
				</Link>
			</Button>
		</section>
	)
}
