import { useState } from 'react'

import { PRODUCT_TABS } from '../../shared/constants'
import type { IProduct } from '../../shared/types'
import {
	ComplectationList,
	Delivery,
	Payment,
	SpecificationsList
} from '../../widgets'

interface Props {
	product: IProduct
}

export const BigProductTabs = ({ product }: Props) => {
	const [tab, setTab] = useState(0)
	return (
		<section className='bg-[#f5f5f5]'>
			<div className='container py-5 sm:py-10 md:pt-22.5 md:pb-37.5'>
				<div className='flex items-center justify-between overflow-x-auto border-b border-[#ababab] text-nowrap'>
					{PRODUCT_TABS.map((item, index) => (
						<button
							className={`border-b-4 border-transparent px-2.5 py-7 text-xl font-black ${
								tab === index && 'border-text!'
							}`}
							onClick={() => setTab(index)}
							key={index}
						>
							{item}
						</button>
					))}
				</div>

				<div className='mt-25'>
					{tab === 0 ? (
						<ComplectationList
							complectation={product.complectation}
						/>
					) : tab === 1 ? (
						<SpecificationsList
							specifications={product.specifications}
						/>
					) : tab === 2 ? (
						<Delivery />
					) : tab === 3 ? (
						<Payment />
					) : tab === 4 ? (
						<p className='font-second mt-25 text-sm font-light sm:text-base'>
							Главное отличие фена Dyson в быстром и безопасном
							высушивании волос. В рукоятку встроен датчик
							температуры, благодаря которому она не поднимается
							выше 100 градусов. Главное отличие фена Dyson в
							быстром и безопасном высушивании волос. В рукоятку
							встроен датчик температуры, благодаря которому она
							не поднимается выше 100 градусов. Главное отличие
							фена Dyson в быстром и безопасном высушивании волос.
							В рукоятку встроен датчик температуры, благодаря
							которому она не поднимается выше 100 градусов.
							Главное отличие фена Dyson в быстром и безопасном
							высушивании волос. В рукоятку встроен датчик
							температуры, благодаря которому она не поднимается
							выше 100 градусов. Главное отличие фена Dyson в
							быстром и безопасном высушивании волос. В рукоятку
							встроен датчик температуры, благодаря которому она
							не поднимается выше 100 градусов.
						</p>
					) : (
						<p className='font-second mt-25 text-sm font-light sm:text-base'>
							Главное отличие фена Dyson в быстром и безопасном
							высушивании волос. В рукоятку встроен датчик
							температуры, благодаря которому она не поднимается
							выше 100 градусов. Главное отличие фена Dyson в
							быстром и безопасном высушивании волос. В рукоятку
							встроен датчик температуры, благодаря которому она
							не поднимается выше 100 градусов. Главное отличие
							фена Dyson в быстром и безопасном высушивании волос.
							В рукоятку встроен датчик температуры, благодаря
							которому она не поднимается выше 100 градусов.
							Главное отличие фена Dyson в быстром и безопасном
							высушивании волос. В рукоятку встроен датчик
							температуры, благодаря которому она не поднимается
							выше 100 градусов. Главное отличие фена Dyson в
							быстром и безопасном высушивании волос. В рукоятку
							встроен датчик температуры, благодаря которому она
							не поднимается выше 100 градусов.
						</p>
					)}
				</div>
			</div>
		</section>
	)
}
