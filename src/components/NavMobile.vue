<template>
	<nav
		class="NavMobile"
		:class="{'is-open': nav.isMobileOpen}"
		@touchstart="handleTouchstart"
		@touchmove="handleTouchmove"
	>
		<ul class="NavMobile__list">
			<li class="NavMobile__item"><a href="">Продукты</a></li>
			<li class="NavMobile__item"><a href="">Цвета</a></li>
			<li class="NavMobile__item"><a href="">Вдохновение</a></li>
			<li class="NavMobile__item"><a href="">Советы</a></li>
			<li class="NavMobile__item"><a href="">Найти магазин</a></li>
		</ul>

		<hr v-if="!isBreakpoint.md">

		<Contacts class="NavMobile__contacts" v-if="!isBreakpoint.md" />

	</nav>

	<Overlay
		style="--duration: var(--duration-lg)"
		:visible="nav.isMobileOpen"
		@click="closeNav"
	/>
</template>

<script setup>
import { ref } from 'vue'
import Contacts from '@/components/Contacts.vue'
import { useBreakpointsStore } from '@/store/breakpoints'
import { useNavStore } from '@/store/nav'
import Overlay from '@/components/ui/Overlay.vue'

const isBreakpoint = useBreakpointsStore()
const nav = useNavStore()
const touchInitial = ref()

const closeNav = () => {
	nav.setMobile(false)
}

const handleTouchstart = (e) => {
	touchInitial.value = e.touches[0].clientX
}

const handleTouchmove = (e) => {
	let te = e.changedTouches[0].clientX

	if (touchInitial.value - 30 > te) {
		closeNav()
	}
}
</script>
