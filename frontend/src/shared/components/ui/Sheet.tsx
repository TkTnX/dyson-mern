import { X } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
	className?: string
	onClose: () => void
	children: React.ReactNode
}

export const Sheet = ({ className, onClose, children }: Props) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])
	return (
		<div className={`fixed inset-0 z-20 bg-black/30`}>
			<div
				className={`vsm:min-w-105 relative top-0 bottom-0 left-0 h-screen bg-white px-5 py-14 sm:w-fit sm:px-10 md:px-20 md:py-17.5 ${className}`}
			>
				<button onClick={onClose} className={`absolute top-4 right-4`}>
					<X />
				</button>
				{children}
			</div>
		</div>
	)
}
