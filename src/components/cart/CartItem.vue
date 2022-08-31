<template>
	<div class="CartItem"
		:class="{
			'is-deleted': data.deleted
		}"
	>

		<img src="/media/catalog-item-3-dummy.jpg" class="CartItem__image" alt="">

		<div class="CartItem__desc">
			<h4 class="CartItem__heading">{{ itemData.title }}</h4>
			<span class="CartItem__price">{{ itemData.price }} ₽</span>
		</div>

		<div class="Amounter CartItem__amount">
			<button class="Button -sm"
				@click="decrementAmount(data.id)"
			>
				<Icon name="minus" />
			</button>
			<div class="Amounter__value">{{ data.amount }}</div>
			<button class="Button -sm"
				@click="incrementAmount(data.id)"
			>
				<Icon name="plus" />
			</button>
		</div>

		<div class="CartItem__action">
			<button class="CartItem__button"
				v-if="!data.deleted"
				@click="removeCartItem(data.id)"
			>
				<Icon name="x" class="-delete"/>
			</button>
			<button class="CartItem__button -restore"
				v-if="data.deleted"
				@click="restoreCartItem(data.id)"
			>
				<Icon name="repeat" class="-restore" />
			</button>
		</div>

	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Icon from '@/components/ui/Icon.vue';
import { useCartStore } from '@/store/cart'
import { useCatalogStore } from '@/store/catalog'

const { removeCartItem, restoreCartItem, decrementAmount, incrementAmount } = useCartStore()

const itemData = ref({})
const { getItem } = useCatalogStore()

const props = defineProps({
	data: Object
})

onMounted(() => {
	itemData.value = getItem(props.data.id)
})
</script>
