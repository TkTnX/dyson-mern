import { Link } from 'react-router'

interface Props {
	items: { label: string; href?: string }[]
}

export const Breadcrumbs = ({ items }: Props) => {
	return (
		<ul className='container mt-12.5 flex flex-wrap items-center gap-2'>
			<li className='font-second flex items-center gap-1 text-xl font-light text-[#ababab]'>
				<Link to={'/'}>Главная</Link> /
			</li>
			{items.map((item, index) => (
				<li
					className='font-second flex items-center gap-1 text-xl font-light text-[#ababab]'
					key={index}
				>
					{item.href ? (
						<Link to={item.href}>{item.label}</Link>
					) : (
						<p className='text-text'>{item.label}</p>
					)}
					{index + 1 !== items.length && <span>/</span>}
				</li>
			))}
		</ul>
	)
}
