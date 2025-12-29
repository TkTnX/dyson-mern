import { Plus } from 'lucide-react'
import { useState } from 'react'

import { FAQ } from '../shared/constants'

interface Props {
	className?: string
}

export const Faq = ({ className }: Props) => {
	const [open, setOpen] = useState<null | number>(null)

	const onClick = (index: number) => {
		if (index === open) {
			setOpen(null)
		} else {
			setOpen(index)
		}
	}

	return (
		<section className={`bg-[#f8f8f8] ${className}`}>
			<div className='container py-37.5'>
				<h2 className='font-second text-2xl font-black sm:text-3xl md:text-5xl'>
					FAQ — Часто задаваемые вопросы
				</h2>

				<div className='mt-15 border-t border-[#ababab]'>
					{FAQ.map((question, index) => (
						<div className='border-b border-[#ababab]' key={index}>
							<button
								onClick={() => onClick(index)}
								className='flex w-full items-center justify-between py-8.5'
							>
								<h6 className='text-xl'>{question.title}</h6>
								<Plus
									className={`${open === index && 'rotate-45'} transition`}
									size={36}
								/>
							</button>
							<p
								className={`overflow-hidden pb-5 font-bold transition ${
									open === index ? 'block' : 'hidden'
								}`}
							>
								{question.content}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
