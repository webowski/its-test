<template>
	<Popup
		class="-cart"
		ref="popupCart"
		@close="isCartOpen = false"
	>
		<section class="Cart">

			<h2 class="Cart__heading">Корзина</h2>

			<div class="Cart__listHeader">
				<div class="Cart__count">{{ cartItems.length }} товара</div>
				<button class="Cart__reset" @click="resetCart" v-if="cartItems.length">очистить список</button>
			</div>

			<div class="Cart__list">
				<CartItem
					v-if="isCatalogLoaded"
					v-for="item in cartItems"
					:key="item.id"
					:data="item"
				/>
			</div>

			<div class="Cart__footer">

				<div class="Cart__total">
					<h5>Итого</h5>
					<div class="Cart__value">{{ total }} ₽</div>
				</div>

				<button class="Button -primary -lg Cart__submit">Оформить заказ</button>

			</div>
		</section>

	</Popup>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Popup from '@/components/ui/Popup.vue'
import CartItem from '@/components/cart/CartItem.vue'
import { useCartStore } from '@/store/cart'
import { useCatalogStore } from '@/store/catalog'

const popupCart = ref(null)
const total = ref(0)
const { isCatalogLoaded } = storeToRefs(useCatalogStore())
const { getItem } = useCatalogStore()
const { isCartOpen, cartItems } = storeToRefs(useCartStore())

watch(isCartOpen, () => {
	if (isCartOpen.value) popupCart.value.isOpen = isCartOpen.value
})

watch(isCatalogLoaded, () => {
	calculateTotal()
})

watch(cartItems, () => {
	calculateTotal()
}, {deep: true})

function resetCart() {
	cartItems.value = []
}

function calculateTotal() {
	total.value = 0

	let totalCartItems = cartItems.value.filter(cartItem => {
		return !cartItem.deleted
	})

	totalCartItems.forEach(cartItem => {
		let catalogItem = getItem(cartItem.id)
		total.value = total.value + (parseInt(catalogItem.price) * cartItem.amount)
	})

	total.value = total.value.toLocaleString().replace(',', ' ')
}
</script>
