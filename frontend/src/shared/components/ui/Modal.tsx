import { X } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
	children: React.ReactNode
	className?: string
	onClose: () => void
}

export const Modal = ({ children, className, onClose }: Props) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [])
	return (
		<div
			className={`fixed inset-0 z-20 flex items-center justify-center bg-black/30`}
		>
			<div className={`relative bg-white px-20 py-17.5 ${className}`}>
				<button onClick={onClose} className='absolute top-4 right-4'>
					<X />
				</button>
				{children}
			</div>
		</div>
	)
}
