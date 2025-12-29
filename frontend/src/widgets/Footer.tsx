import { Link } from 'react-router'

import { FOOTER_ITEMS, FOOTER_SOCIALS } from '../shared/constants'

export const Footer = () => {
	return (
		<footer className='bg-black text-white'>
			<div className='container py-12.5'>
				<div>
					<img src='/images/icons/logo.svg' />
				</div>
				<Link
					to={'/about'}
					className='font-second mt-6 inline-block text-2xl font-black'
				>
					О компании
				</Link>
				<div className='mt-7.5 grid grid-cols-2 items-start justify-between gap-4 sm:grid-cols-4'>
					{FOOTER_ITEMS.map(item => (
						<div className=''>
							<h6 className='font-second text-sm font-black lg:text-2xl'>
								{item.title}
							</h6>
							<nav className='mt-2.5'>
								<ul className='flex flex-col gap-1 md:gap-1.5'>
									{item.items.map(link => (
										<li key={link.href}>
											<Link
												className='text-xs font-light hover:underline lg:text-base'
												to={link.href}
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					))}
					<div className='flex flex-col gap-3 lg:gap-14'>
						<div className='text-sm lg:text-2xl'>
							<h6 className='font-second font-black'>
								Отдел логистики:
							</h6>
							<a className='font-bold' href='tel:+79998004554'>
								{' '}
								+7 (999) 800-45-54
							</a>
						</div>
						<div className='flex items-center gap-5'>
							{FOOTER_SOCIALS.map(social => (
								<Link
									className='hover:opacity-80'
									to={social.href}
								>
									<img
										className='h-5 w-5 lg:h-auto lg:w-auto'
										src={social.image}
										alt={'social'}
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
				<p className='mt-10 text-center text-xs font-light sm:text-base'>
					Интернет-магазин dysmarket.ru, 2022 © Все права защищены.
				</p>
			</div>
		</footer>
	)
}
