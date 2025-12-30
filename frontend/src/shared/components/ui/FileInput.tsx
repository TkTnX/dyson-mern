interface Props {
	className?: string
}

export const FileInput = ({ className }: Props) => {
	return (
		<label
			className={`cursor-pointer border border-[#d9d9d9] px-6 py-2.5 text-center placeholder:text-[#ababab] focus-within:outline-none ${className}`}
		>
			<input accept='image/*' type='file' hidden />
			<p className='text-accent underline'>Загрузить фото</p>
			<p className='text-[#ababab]'>
				Нажмите кнопку “Загрузить фото” или перетащите фотографию в эту
				область{' '}
			</p>
		</label>
	)
}
