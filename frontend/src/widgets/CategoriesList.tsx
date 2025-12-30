import { CategoryItem } from '../entities'
import { ErrorMessage, Skeleton } from '../shared/components'
import { useCategories } from '../shared/hooks'

export const CategoriesList = () => {
	const { getCategories } = useCategories()
	const { data, isPending, error } = getCategories()

	if (error) return <ErrorMessage message={error.message} />

	return (
		<section
			className='container grid grid-cols-2 gap-2.5 bg-[#f2f2f2] py-3 shadow-sm sm:grid-cols-4 sm:gap-5'
			id='categories'
		>
			{isPending
				? [...new Array(6)].map((_, index) => (
						<Skeleton className='h-112.5 w-full' key={index} />
					))
				: data.map(category => (
						<CategoryItem key={category._id} category={category} />
					))}
		</section>
	)
}
