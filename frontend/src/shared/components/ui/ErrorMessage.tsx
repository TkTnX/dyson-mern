interface Props {
	className?: string
	message: string
}

export const ErrorMessage = ({ className, message }: Props) => {
	return (
		<p className={`my-10 text-center text-red-500 ${className}`}>
			{message}
		</p>
	)
}
