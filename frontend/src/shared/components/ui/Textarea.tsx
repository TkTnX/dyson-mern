interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	variant?: 'underlined' | 'bordered'
}

export const Textarea = ({
	className,
	variant = 'underlined',
	...props
}: Props) => {
	const style =
		variant === 'underlined'
			? 'border-b pr-4 pb-4'
			: 'border border-[#d9d9d9] px-6 py-2.5'

	return (
		<textarea
			className={` ${style} max-h-100 min-h-50 placeholder:text-[#ababab] focus-within:outline-none ${className}`}
			{...props}
		/>
	)
}
