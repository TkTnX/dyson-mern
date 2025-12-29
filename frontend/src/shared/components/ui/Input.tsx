interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

export const Input = ({ className, ...props }: Props) => {
	return (
		<input
			className={`border-b pr-4 pb-4 placeholder:text-[#ababab] focus-within:outline-none ${className}`}
			{...props}
		/>
	)
}
