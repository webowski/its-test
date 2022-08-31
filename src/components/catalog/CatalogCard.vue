<template>
	<article class="CatalogCard">

		<a href="" class="CatalogCard__images">
			<img src="/media/catalog-item-1-dummy.jpg" alt="">
			<img src="/media/catalog-item-2-dummy.jpg" alt="">
		</a>

		<h4 class="CatalogCard__heading"><a href="">{{ data.title }}</a></h4>

		<div class="CatalogCard__footer">
			<div class="CatalogCard__price">{{ price }} ₽</div>
			<button class="Button CatalogCard__button" title="Добавить в корзину"
				@click="addCartItem(data.id)"
			>
				<Icon name="plus" class="-plus" />
			</button>
		</div>

	</article>
</template>

<script setup>
import Icon from '@/components/ui/Icon.vue'
import { useCartStore } from '@/store/cart'

const props = defineProps({
	data: Object
})

const price = parseInt(props.data.price)

const { addCartItem } = useCartStore()
</script>
