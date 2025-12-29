export const SORT_SELECT_ITEMS = [
	{
		label: 'Сначала популярные',
		value: 'asc',
		key: '_id'
	},
	{
		label: 'Сначала дешёвые',
		value: 'asc',
		key: 'price'
	},
	{
		label: 'Сначала дорогие',
		value: 'desc',
		key: 'price'
	},
	{
		label: 'Новинки',
		value: 'desc',
		key: 'created_at'
	},
	{
		label: 'Высокий рейтинг',
		value: 'desc',
		key: 'rating'
	}
]
