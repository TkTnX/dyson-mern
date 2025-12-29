import { MoveDownRight } from 'lucide-react'

import { ProductItem } from '../entities'
import { Button, ErrorMessage, Skeleton } from '../shared/components'
import { useProducts } from '../shared/hooks'

interface Props {
	slug: string
}
// TODO: SLIDER WITH 3 ITEMS PER SLIDE
export const SimilarProductsList = ({ slug }: Props) => {
	const { getProducts } = useProducts()
	const { data, isPending, error } = getProducts({ category: slug })
	if (error) return <ErrorMessage message={error.message} />

	return (
		<section className='container'>
			<h2 className='title'>Похожие товары</h2>
			<div className='vsm:grid-cols-2 mt-15 grid gap-5 md:grid-cols-3'>
				{isPending
					? [...new Array(3)].map((_, index) => (
							<Skeleton className='h-187.5 w-full' key={index} />
						))
					: data.map(product => (
							<ProductItem product={product} key={product._id} />
						))}
			</div>
			<Button
				className='mx-auto mt-20 flex items-center justify-center gap-7.5'
				variant='outline'
			>
				<span>Показать ещё</span> <MoveDownRight />{' '}
			</Button>
		</section>
	)
}
