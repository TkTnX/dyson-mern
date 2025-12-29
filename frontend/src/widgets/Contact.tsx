import { Button, Input } from '../shared/components'

export const Contact = () => {
	return (
		<section className='bg-[#f8f8f8]'>
			<div className='container flex flex-col items-stretch justify-between gap-2 py-10 sm:flex-row sm:py-16 md:py-37.5'>
				<div className='flex-1'>
					<h4 className='font-second text-xl font-bold md:text-5xl'>
						Свяжитесь с нами
					</h4>
					<form className='mt-12.5 flex flex-col gap-7.5'>
						<Input
							className='max-w-138.75'
							placeholder='Ваше имя'
							name='name'
						/>
						<Input
							className='max-w-138.75'
							placeholder='Ваш номер телефона'
							name='tel'
							type='tel'
						/>
						<Button className='hover:bg-accent! mt-5 w-fit rounded-t-none bg-black px-0 2xl:rounded-l-none'>
							Оставить заявку
						</Button>
					</form>
				</div>
				<div className='flex-1'>
					<h4 className='font-second text-xl font-bold md:text-5xl'>
						Свяжитесь с нами
					</h4>
					<form className='mt-12.5 flex flex-col gap-7.5'>
						<Input
							className='max-w-138.75'
							placeholder='Ваш e-mail'
							name='email'
						/>

						<Button className='hover:bg-accent! mt-5 w-fit rounded-t-none bg-black px-0 2xl:rounded-l-none'>
							Оставить заявку
						</Button>
						<label className='flex items-center gap-4'>
							<input
								type='checkbox'
								className='min-h-4 min-w-4 p-2.5 accent-[#f8f8f8] md:min-h-7.5 md:min-w-7.5'
							/>
							<p className='text-xs md:text-base'>
								Я ознакомлен(а) с политикой конфиденциальности и
								согласен(а) с обработкой персональных данных
							</p>
						</label>
					</form>
				</div>
			</div>
		</section>
	)
}
