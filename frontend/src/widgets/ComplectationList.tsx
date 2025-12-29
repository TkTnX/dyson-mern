import { ComplectationItem } from '../entities'
import type { IComplecation } from '../shared/types'

interface Props {
	complectation: IComplecation[]
}

export const ComplectationList = ({ complectation }: Props) => {
	if (!complectation.length)
		return (
			<p className='my-20 text-center text-gray-500'>
				Комплектация не указана!
			</p>
		)

	return (
		<div className='flex flex-col gap-5'>
			{complectation.map(item => (
				<ComplectationItem complectation={item} />
			))}
		</div>
	)
}
