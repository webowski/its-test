<template>
	<div class="CatalogFilter">
		<SwitchField label="Новинки"
			:checked="filterSet.new"
			@change="(value) => filterSet.new = value"
			/>
		<SwitchField label="Есть в наличии"
			:checked="filterSet.inStock"
			@change="(value) => filterSet.inStock = value"
		/>
		<SwitchField label="Контрактные"
			:checked="filterSet.contract"
			@change="(value) => filterSet.contract = value"
		/>
		<SwitchField label="Эксклюзивные"
			:checked="filterSet.exclusive"
			@change="(value) => filterSet.exclusive = value"
		/>
		<SwitchField label="Распродажа"
			:checked="filterSet.sale"
			@change="(value) => filterSet.sale = value"
		/>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SwitchField from '@/components/ui/SwitchField.vue'
import { useCatalogStore } from '@/store/catalog'

const { filterSet } = storeToRefs(useCatalogStore())
</script>
