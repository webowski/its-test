import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
	state: () => ({
		isCartOpen: false,
		cartItems: [
			{ id: '23h4', deleted: false, amount: 1 },
		],
	}),
	actions: {

		setCartOpen(bool) {
			this.isCartOpen = bool
		},

		addCartItem(itemId) {
			let foundIndex = findItemById(itemId, this.cartItems)

			if (foundIndex !== undefined) {
				this.cartItems[foundIndex].amount++
			} else {
				this.cartItems.push({
					id: itemId,
					deleted: false,
					amount: 1,
				})
			}
		},

		removeCartItem(itemId) {
			let foundIndex = findItemById(itemId, this.cartItems)
			if (foundIndex !== undefined) {
				this.cartItems[foundIndex].deleted = true
			}
		},

		restoreCartItem(itemId) {
			let foundIndex = findItemById(itemId, this.cartItems)
			if (foundIndex !== undefined) {
				this.cartItems[foundIndex].deleted = false
			}
		},

		incrementAmount(itemId) {
			let foundIndex = findItemById(itemId, this.cartItems)
			if (foundIndex !== undefined) {
				this.cartItems[foundIndex].amount++
			}
		},

		decrementAmount(itemId) {
			let foundIndex = findItemById(itemId, this.cartItems)
			if (foundIndex !== undefined) {
				if (this.cartItems[foundIndex].amount > 1) this.cartItems[foundIndex].amount--
			}
		},

	},
})

function findItemById(id, items) {
	let foundIndex = undefined

	let foundItem = items.find((item, index) => {
		foundIndex = index
		return item.id === id
	})

	foundIndex = (foundItem) ? foundIndex : undefined

	return foundIndex
}
