import { useEffect, useState } from 'react'

import { axiosInstance } from '../../libs'

interface Props {
	className?: string
	setImageUrls: React.Dispatch<React.SetStateAction<string[]>>
}

export const FileInput = ({ className, setImageUrls }: Props) => {
	const [file, setFile] = useState<File | null>(null)

	const uploadImage = async () => {
		if (!file) return
		const formData = new FormData()
		formData.append('image', file)

		const res = await axiosInstance.post('upload', formData, {
			headers: { 'Content-Type': 'multipart/form-data' }
		})
		console.log(res.data)
		setImageUrls(prev => [...prev, res.data.url])
	}

	useEffect(() => {
		uploadImage()
	}, [file])

	return (
		<label
			className={`cursor-pointer border border-[#d9d9d9] px-6 py-2.5 text-center placeholder:text-[#ababab] focus-within:outline-none ${className}`}
		>
			<input
				onChange={e => {
					if (!e.target.files) return
					setFile(e.target.files[0])
				}}
				accept='image/*'
				type='file'
				hidden
			/>
			<p className='text-accent underline'>Загрузить фото</p>
			<p className='text-[#ababab]'>
				Нажмите кнопку “Загрузить фото” или перетащите фотографию в эту
				область{' '}
			</p>
		</label>
	)
}
