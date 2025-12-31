import { MenuIcon, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { CartModal } from '../shared/components'
import { NAV_ITEMS } from '../shared/constants'
import { useCartStore } from '../shared/stores'

export const Header = () => {
	const [open, setOpen] = useState(false)
	const { cartItems } = useCartStore()
	return (
		<>
			<header className='bg-black'>
				<div className='container flex items-center justify-between gap-1 py-1.5 2xl:gap-12'>
					<button>
						<MenuIcon size={50} color='#fff' />
					</button>
					<Link className='mr-auto md:mr-0' to={'/'}>
						<img src='/images/icons/logo.svg' alt='Logo' />
					</Link>
					<nav className='hidden xl:block'>
						<ul className='font-second flex items-center gap-7 text-xl font-black text-white'>
							{NAV_ITEMS.map(item => (
								<li key={item.href}>
									<Link
										className='hover:opacity-80'
										to={item.href}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<button onClick={() => setOpen(true)} className='relative'>
						{cartItems.length > 0 && (
							<p className='bg-accent absolute -top-5 -right-5 flex h-8 w-8 items-center justify-center rounded-full text-white'>
								{cartItems.length}
							</p>
						)}
						<ShoppingBag color='#fff' />
					</button>
				</div>
			</header>
			{open && <CartModal setOpen={setOpen} />}
		</>
	)
}
