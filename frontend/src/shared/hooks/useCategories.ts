import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '../libs'
import type { ICategory } from '../types'

export function useCategories() {
	const getCategories = () =>
		useQuery({
			queryKey: ['categories'],
			queryFn: async (): Promise<ICategory[]> => {
				const res = await axiosInstance.get('categories')

				return res.data
			}
		})

	return {
		getCategories
	}
}
