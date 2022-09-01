export const useScroll = () => {

	const preventScroll = (e) => {
		e.preventDefault()
		e.stopPropagation()
		return false
	}

	const disableScroll = () => {
		document.querySelector('body').addEventListener('wheel', preventScroll, {passive: false})
		document.querySelector('body').classList.add('G-disableScroll')
	}

	const enableScroll = () => {
		document.querySelector('body').removeEventListener('wheel', preventScroll, {passive: false})
		document.querySelector('body').classList.remove('G-disableScroll')
	}

	return {
		disableScroll,
		enableScroll
	}
}
