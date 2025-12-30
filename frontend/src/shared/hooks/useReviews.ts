import {
	type UseMutationOptions,
	useMutation,
	useQuery
} from '@tanstack/react-query'

import { axiosInstance } from '../libs'
import type { CreateReviewType, IReview } from '../types'

export function useReviews() {
	const getReviews = (params?: Record<string, string | undefined>) =>
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

	const createReview = (
		options?: Omit<
			UseMutationOptions<unknown, unknown, unknown>,
			'mutationFn' | 'mutationKey'
		>
	) =>
		useMutation({
			mutationKey: ['create review'],
			mutationFn: async (body: CreateReviewType) => {
				const { data } = await axiosInstance.post('reviews', body)

				return data
			},
			...options
		})

	return {
		getReviews,
		createReview
	}
}
