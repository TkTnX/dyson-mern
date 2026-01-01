import { MenuIcon, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { CartModal, MobileMenuSheet } from '../shared/components'
import { useScrollToTop } from '../shared/hooks'
import { useCartStore } from '../shared/stores'

import { Navbar } from './Navbar'

export const Header = () => {
	useScrollToTop()
	const [openMobile, setOpenMobile] = useState(false)
	const [openCart, setOpenCart] = useState(false)
	const { cartItems } = useCartStore()
	return (
		<>
			<header className='overflow-hidden bg-black'>
				<div className='container flex items-center justify-between gap-1 py-1.5 2xl:gap-12'>
					<button
						onClick={() => setOpenMobile(true)}
						className='xl:hidden'
					>
						<MenuIcon size={50} color='#fff' />
					</button>
					<Link className='mr-auto md:mr-0' to={'/'}>
						<img src='/images/icons/logo.svg' alt='Logo' />
					</Link>
					<Navbar />
					<button
						onClick={() => setOpenCart(true)}
						className='relative'
					>
						{cartItems.length > 0 && (
							<p className='bg-accent absolute -top-5 -right-5 flex h-8 w-8 items-center justify-center rounded-full text-white'>
								{cartItems.length}
							</p>
						)}
						<ShoppingBag color='#fff' />
					</button>
				</div>
			</header>
			{openCart && <CartModal setOpen={setOpenCart} />}
			{openMobile && <MobileMenuSheet setOpen={setOpenMobile} />}
		</>
	)
}
