<template>
	<header class="Header">
		<div class="Header__grid">

			<NavMobileOpener v-if="!isBreakpoint.lg"/>

			<a href="" class="Header__logo">
				<img src="../images/logo.svg" alt="">
			</a>

			<NavMain class="Header__nav" v-if="isBreakpoint.lg" />

			<div class="Header__contacts">
				<a href="tel:+74952217769" class="Header__phone">+7 (495) 221-77-69</a>
				<a href="#" class="Header__callback">Заказать звонок</a>
			</div>

			<div class="Header__userPanel">

				<a href="" class="IconLink" v-if="isBreakpoint.lg">
					<Icon name="search" class="-search" />
				</a>

				<a href="" class="IconLink" v-if="isBreakpoint.lg">
					<Icon name="profile" class="-profile" />
				</a>

				<a href="" class="IconLink" v-if="isBreakpoint.lg">
					<Icon name="heart" class="-heart" />
				</a>

				<a href="" class="Circle -sm Header__cartCounter"
					@click.prevent="setCartOpen(true)"
				>{{ cartItems.length }}</a>

			</div>

		</div>

		<NavMobile v-if="!isBreakpoint.lg" />

	</header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import NavMain from '@/components/NavMain.vue'
import Icon from '@/components/ui/Icon.vue'
import NavMobileOpener from '@/components/NavMobileOpener.vue'
import NavMobile from '@/components/NavMobile.vue'
import { useBreakpointsStore } from '@/store/breakpoints'
import { useCartStore } from '@/store/cart'

const isBreakpoint = useBreakpointsStore()
const { cartItems } = storeToRefs(useCartStore())
const { setCartOpen } = useCartStore()

</script>
