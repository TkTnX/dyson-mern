import type { IComplecation } from '../../shared/types'

interface Props {
	complectation: IComplecation
}

export const ComplectationItem = ({ complectation }: Props) => {
	return (
		<div className='vsm:flex-row flex flex-col items-center gap-5 rounded-sm bg-white sm:px-10'>
			<img
				className='max-w-35 flex-1 sm:max-w-fit'
				src={complectation.image}
				alt={complectation.title}
			/>
			<div className='vsm:px-0 flex flex-1 flex-col gap-2 px-4 py-4 sm:gap-5 sm:py-10'>
				<h3 className='text-sm font-black sm:text-xl md:text-3xl'>
					{complectation.title}
				</h3>
				<p className='font-second text-xs font-light sm:text-base'>
					{complectation.description}
				</p>
			</div>
		</div>
	)
}
