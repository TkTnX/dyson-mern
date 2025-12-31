import { X } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
	children: React.ReactNode
	className?: string
	bgClassName?: string
	closeIconClassName?: string
	onClose: () => void
}

export const Modal = ({
	children,
	bgClassName,
	className,
	closeIconClassName,
	onClose
}: Props) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])
	return (
		<div
			className={`fixed inset-0 z-20 flex items-center justify-center bg-black/30 ${bgClassName}`}
		>
			<div
				className={`relative bg-white px-5 py-14 sm:px-10 md:px-20 md:py-17.5 ${className}`}
			>
				<button
					onClick={onClose}
					className={`absolute top-4 right-4 ${closeIconClassName}`}
				>
					<X />
				</button>
				{children}
			</div>
		</div>
	)
}
