import { SpecificationItem } from '../entities'
import type { ISpecification } from '../shared/types'

interface Props {
	specifications: ISpecification[]
}

export const SpecificationsList = ({ specifications }: Props) => {
	if (!specifications.length)
		return (
			<p className='my-20 text-center text-gray-500'>
				Характеристики не указаны!
			</p>
		)
	return (
		<div className='border-t border-[#303030]'>
			{specifications.map(specification => (
				<SpecificationItem
					specification={specification}
					key={specification._id}
				/>
			))}
		</div>
	)
}
