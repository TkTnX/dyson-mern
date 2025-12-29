interface Props {
	className?: string
}

export const Skeleton = ({ className }: Props) => {
	return (
		<div
			className={`animate-pulse rounded-lg bg-gray-400 ${className}`}
		></div>
	)
}
