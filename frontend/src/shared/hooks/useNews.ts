import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from '../libs'
import type { INewsItem } from '../types'

export function useNews() {
	const getNews = (params?: Record<string, string>) =>
		useQuery({
			queryKey: ['news'],
			queryFn: async (): Promise<INewsItem[]> => {
				const { data } = await axiosInstance.get('news', { params })

				return data
			}
		})

	const getNewsItem = (id: string) =>
		useQuery({
			queryKey: ['newsItem', id],
			queryFn: async (): Promise<INewsItem> => {
				const { data } = await axiosInstance.get(`news/${id}`)

				return data
			}
		})

	return {
		getNews,
		getNewsItem
	}
}
