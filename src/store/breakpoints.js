import { defineStore } from 'pinia'

const BREAKPOINTS = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
}

export const useBreakpointsStore = defineStore('isBreakpoint', {
	state: () => ({
		xs: null,
		sm: null,
		md: null,
		lg: null,
		xl: null,
	}),
	actions: {
		setState() {
			const width = window.innerWidth

			for (let breakpoint in BREAKPOINTS) {
				this[breakpoint] = width >= BREAKPOINTS[breakpoint] ? true : false
			}
		}
	}
})
