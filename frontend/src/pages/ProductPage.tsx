import { Play } from 'lucide-react'
import { useParams } from 'react-router'

import { BigProduct, BigProductTabs } from '../entities'
import { Breadcrumbs, ErrorMessage, Skeleton } from '../shared/components'
import { useProducts } from '../shared/hooks'
import { Faq, Reviews, SimilarProductsList } from '../widgets'

export const ProductPage = () => {
	const { productId } = useParams()
	const { getProduct } = useProducts()
	const { data, isPending, error } = getProduct(productId!)

	if (error) return <ErrorMessage message={error.message} />
	return (
		<>
			<Breadcrumbs
				items={[
					{
						label: data?.category.name || '',
						href: `/categories/${data?.category.slug}`
					},
					{ label: data?.title || '' }
				]}
			/>
			{isPending ? (
				<div className='container mt-25 flex items-stretch justify-between gap-25'>
					{[...new Array(2)].map((_, index) => (
						<Skeleton key={index} className='h-80 w-full' />
					))}
				</div>
			) : (
				<>
					<section className='container'>
						<BigProduct product={data} />
					</section>
					<BigProductTabs product={data} />
					<Reviews productId={data._id} />
					<Faq className='bg-transparent!' />
					<div className='container flex h-190 w-full cursor-pointer items-center justify-center bg-[#e2e2e2]'>
						<Play size={100} fill='#fff' color='#fff' />
					</div>
					<SimilarProductsList slug={data.category.slug} />
				</>
			)}
		</>
	)
}
