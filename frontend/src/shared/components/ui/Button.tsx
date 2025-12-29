import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
	variant?: 'default' | 'outline'
}

export const Button = ({
	children,
	className,
	variant = 'default',
	...props
}: Props) => {
	const style =
		variant === 'outline'
			? 'border border-black bg-transparent text-black hover:text-accent hover:border-accent'
			: 'bg-accent text-white hover:bg-black'

	return (
		<button
			className={`rounded-sm px-6.5 py-2 text-base transition md:px-12.5 md:py-3.75 md:text-2xl ${style} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}
