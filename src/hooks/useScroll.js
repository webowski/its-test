export const useScroll = () => {

	const preventScroll = (e) => {
		e.preventDefault()
		e.stopPropagation()
		return false
	}

	const preventTouch = (e) => {
		if(e.target.nodeName === "BODY"){
			e.preventDefault()
		}
	}

	const preventTouchPropagation = (e) => {
		e.stopPropagation()
	}

	const disableScroll = () => {
		document.querySelector('body').addEventListener('wheel', preventScroll, {passive: false})
		document.querySelector('body').addEventListener('touchmove', preventTouch, {passive: false})
		document.querySelector('*:not(body)').addEventListener('touchmove', preventTouchPropagation, {passive: false})
		document.querySelector('body').classList.add('G-disableScroll')
		document.querySelector('html').classList.add('G-disableScroll')
	}

	const enableScroll = () => {
		document.querySelector('body').removeEventListener('wheel', preventScroll)
		document.querySelector('body').removeEventListener('touchmove', preventTouch)
		document.querySelector('*:not(body)').removeEventListener('touchmove', preventTouchPropagation)
		document.querySelector('body').classList.remove('G-disableScroll')
		document.querySelector('html').classList.remove('G-disableScroll')
	}

	return {
		disableScroll,
		enableScroll
	}
}
