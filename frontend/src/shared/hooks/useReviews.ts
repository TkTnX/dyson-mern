import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '../libs'
import type { IReview } from '../types'

export function useReviews() {
	const getReviews = (params?: Record<string, string>) =>
		useQuery({
			queryKey: ['reviews', params],
			queryFn: async (): Promise<{
				total: number
				items: IReview[]
				totalPages: number
			}> => {
				const { data } = await axiosInstance.get('reviews', {
					params
				})

				return data
			}
		})

	return {
		getReviews
	}
}
