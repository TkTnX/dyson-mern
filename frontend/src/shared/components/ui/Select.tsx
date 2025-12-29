import { ChevronDown } from 'lucide-react'
import { type HTMLAttributes } from 'react'
import { useSearchParams } from 'react-router'

interface Props extends HTMLAttributes<HTMLSelectElement> {
	options: { label: string; value: string; key: string }[]
	className?: string
	setSort: (obj: { key: string; value: string }) => void
	sortBy: string
}

export const Select = ({
	options,
	className,
	setSort,
	sortBy,
	...props
}: Props) => {
	const [, setSearchParams] = useSearchParams()

	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const [key, value] = e.target.value.split('-')
		setSort({
			key,
			value
		})
		setSearchParams({ sortBy: e.target.value })
	}

	return (
		<div className='group border-accent hover:text-accent relative mt-12 ml-auto flex w-fit cursor-pointer items-center rounded-sm border'>
			<select
				defaultValue={sortBy}
				value={sortBy}
				onChange={onChange}
				className={`relative z-2 w-full cursor-pointer appearance-none px-6 py-2 pr-10 focus-visible:outline-none ${className}`}
				{...props}
			>
				{options.map(option => (
					<option
						className='text-text border-b bg-white'
						key={option.value}
						value={`${option.key}-${option.value}`}
					>
						{option.label}
					</option>
				))}
			</select>
			<ChevronDown
				color='none'
				fill='var(--accent-color)'
				className='absolute right-2 transition group-focus-within:rotate-180'
			/>
		</div>
	)
}
