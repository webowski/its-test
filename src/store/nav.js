import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
	state: () => ({
		isMobileOpen: false,
	}),
	actions: {
		setMobile(bool) {
			this.isMobileOpen = bool
		}
	}
})
