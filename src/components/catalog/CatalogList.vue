<template>
	<div class="CatalogList">
		<CatalogCard v-for="item in items" :key="item.id" :data="item" />
	</div>
</template>

<script setup>
import CatalogCard from './CatalogCard.vue'

const props = defineProps({
	items: Array
})
</script>
