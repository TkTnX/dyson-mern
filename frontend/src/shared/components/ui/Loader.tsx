import { Loader2Icon } from 'lucide-react'

export const Loader = () => {
	return (
		<div className='absolute inset-0 z-10 flex h-screen items-center justify-center bg-white'>
			<Loader2Icon className='animate-spin' />
		</div>
	)
}
