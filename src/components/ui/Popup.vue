<template>
	<div class="PopupOrigin">

		<div class="Popup"
			:class="[
				{ 'is-open': isOpen },
				$attrs.class
			]"
			@touchstart="handleTouchstart"
			@touchmove="handleTouchmove"
		>
			<button class="Popup__closer"
				@click="closePopup"
			>
				<Icon name="x" />
			</button>

			<slot></slot>
		</div>

		<Overlay
			style="--duration: var(--duration-lg)"
			:visible="isOpen"
			@click="closePopup"
	 	/>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import Overlay from './Overlay.vue'
import Icon from './Icon.vue';

const emit = defineEmits(['close'])

const isOpen = ref(false)

const closePopup = () => {
	isOpen.value = false
	emit('close')
}

const togglePopup = () => isOpen.value = !isOpen.value

const props = defineProps({
	closeOnSwipeDown: {
    type: Boolean,
    default: false
  },
})

defineExpose({
	togglePopup,
	isOpen,
})

const touchInitial = ref()

const handleTouchstart = (e) => {
	if (!props.closeOnSwipeDown) return
	touchInitial.value = e.touches[0].clientY
}

const handleTouchmove = (e) => {
	if (!props.closeOnSwipeDown) return

	let te = e.changedTouches[0].clientY

	if (touchInitial.value + 40 < te) {
		closePopup()
	}
}
</script>
