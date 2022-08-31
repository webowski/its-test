import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', {
	state: () => ({
		isCatalogLoaded: false,
		items: [],
		filterSet: {
			new: false,
			inStock: false,
			contract: false,
			exclusive: false,
			sale: false,
		},
		sortingType: 'priceHigh',
	}),
	actions: {
		async fetchItems() {

			this.items = []

			await fetch('https://630ea84e109c16b9abfdbf63.mockapi.io/products')
				.then(response => {

					return response.json()

				})
				.then(data => {

					this.items.push({
						createdAt: '2005-06-14T10:20:05.896Z',
						id: '23h4',
						title: 'Краска Wallquest, Brownsone MS90102',
						price: '6000',
						inStock: true,
						contract: true,
						exclusive: false,
						sale: false,
						new: false,
						popularity: 100,
						image: '/media/catalog-item-1-dummy.jpg',
						image2: '/media/catalog-item-2-dummy.jpg',
					})

					this.items = this.items.concat(data)

					this.isCatalogLoaded = true

				})
				.catch(error => console.log(error))
		},

		getItem(itemId) {
			return this.items.find(item => item.id == itemId)
		},

		formatPrice(price) {
			return parseInt(price)
		},

	},
	getters: {
	}
})
