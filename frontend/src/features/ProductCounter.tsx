import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

interface Props {
	className?: string
}

export const ProductCounter = ({ className }: Props) => {
	const [count, setCount] = useState(1)
	return (
		<div
			className={`hidden flex-1 items-center justify-center gap-12 rounded-t-xl border px-4 py-6 lg:flex 2xl:rounded-t-none 2xl:rounded-l-xl ${className} `}
		>
			<button
				disabled={count === 1}
				className='disabled:pointer-events-none disabled:opacity-50'
				onClick={() => setCount(count - 1)}
			>
				<Minus />
			</button>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>
				<Plus />
			</button>
		</div>
	)
}
