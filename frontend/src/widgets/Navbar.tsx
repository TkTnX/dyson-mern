import { Link } from 'react-router'

import { NAV_ITEMS } from '../shared/constants'

interface Props {
    className?:string
}

export const Navbar = ({className}: Props) => {
	return (
		<nav className={`hidden xl:block ${className}`}>
			<ul className='font-second flex items-center gap-7 text-xl font-black text-white'>
				{NAV_ITEMS.map(item => (
					<li key={item.href}>
						<Link className='hover:opacity-80' to={item.href}>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
