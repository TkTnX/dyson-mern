import { Navbar } from '../../../widgets'
import { Sheet } from '../ui'

interface Props {
	setOpen: (bool: boolean) => void
}

export const MobileMenuSheet = ({ setOpen }: Props) => {
	return (
		<Sheet onClose={() => setOpen(false)} className=''>
			<img
				src='/images/icons/logo.svg'
				className='flex w-full items-center justify-center invert-100'
				alt=''
			/>
			<Navbar className='*:text-text! mt-10 flex! justify-center *:flex-col' />
		</Sheet>
	)
}
