import type { ISpecification } from '../../shared/types'

interface Props {
	specification: ISpecification
}

export const SpecificationItem = ({ specification }: Props) => {
	return (
		<div className='grid grid-cols-2 items-center border-b border-[#303030] py-10'>
			<p className='font-second text-sm font-light sm:text-base'>
				{specification.label}
			</p>
			<p className='text-base font-black sm:text-2xl md:text-3xl'>
				{specification.value}
			</p>
		</div>
	)
}
