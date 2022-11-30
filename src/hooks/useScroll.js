import { ref } from 'vue'

export const useScroll = () => {
	const top = ref(0)

	// const preventScroll = (e) => {
	// 	e.preventDefault()
	// 	e.stopPropagation()
	// 	return false
	// }

	const disableScroll = () => {
		// document.body.addEventListener('wheel', preventScroll, {passive: false})
		top.value = document.documentElement.scrollTop
		document.body.classList.add('G-disableScroll')
		document.body.style.top = '-' + top.value + 'px'
	}

	const enableScroll = () => {
		// document.body.removeEventListener('wheel', preventScroll)
		document.body.classList.remove('G-disableScroll')
		document.documentElement.scrollTop = document.body.scrollTop = top.value
		document.body.style.top = null
	}

	return {
		disableScroll,
		enableScroll,
	}
}
