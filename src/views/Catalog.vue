<template>
	<Layout>

		<Hero v-if="isBreakpoint.lg">
			<template #aside>
				<Breadcrumbs class="-inverse Hero__breadcrumbs" />
			</template>
			<h1>Краски</h1>
			<p>Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</p>
		</Hero>

		<Breadcrumbs class="-main" v-if="!isBreakpoint.lg" />

		<div class="Section -catalog">
			<div class="Section__grid">

				<h1 v-if="!isBreakpoint.lg">Краски</h1>

				<CatalogFilter class="Section__filter" v-if="isBreakpoint.lg" />

				<div class="Section__topPanel">

					<div class="Section__counter"
						v-if="isBreakpoint.lg"
					>
						{{ filteredItems.length }} товаров
					</div>

					<a href="" class="Section__filterOpener"
						v-if="!isBreakpoint.lg"
						@click.prevent="popupMobileFilter.togglePopup()"
					>
						Фильтры
					</a>

					<Dropdown class="CatalogSorting Section__sorting"
						@change="(value) => sortingType = value"
					/>
				</div>

				<CatalogList class="Section__list" :items="filteredItems" />

			</div>
		</div>

		<Popup
			class="-mobileSlideUp"
			ref="popupMobileFilter"
			closeOnSwipeDown
			v-if="!isBreakpoint.lg"
		>
			<CatalogFilter />
		</Popup>

  </Layout>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Layout from '@/layouts/Layout.vue'
import Hero from '@/components/Hero.vue'
import CatalogList from '@/components/catalog/CatalogList.vue'
import CatalogFilter from '@/components/catalog/CatalogFilter.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Dropdown from '@/components/ui/Dropdown.vue'
import Popup from '@/components/ui/Popup.vue'
import { useBreakpointsStore } from '@/store/breakpoints'
import { useCatalogStore } from '@/store/catalog'

const isBreakpoint = useBreakpointsStore()

const popupMobileFilter = ref(null)
const filteredItems = ref([])

const { items, filterSet, sortingType } = storeToRefs(useCatalogStore())
const { fetchItems } = useCatalogStore()

onMounted(() => {
	fetchItems().then(() => {
		filteredItems.value = getFilteredItems()
		filteredItems.value = sortItems()
	})
})

watch(filterSet, () => {
	filteredItems.value = getFilteredItems()
	filteredItems.value = sortItems()
}, { deep: true })

watch(sortingType, () => {
	filteredItems.value = sortItems()
})

function getFilteredItems() {
	return items.value.filter((item) => {

		let hasFilter = false
		let workingFilters = {}

		for (const filter in filterSet.value) {
			if (filterSet.value[filter] === true) {
				workingFilters[filter] = true
				hasFilter = true
			}
		}

		if (!hasFilter) return true
		let isNeededFilters = true

		for (var key in workingFilters) {
			if (item[key] !== workingFilters[key]) isNeededFilters = false
		}

		return isNeededFilters
	})
}

function sortItems() {
	switch (sortingType.value) {
		case 'priceHigh':
			return filteredItems.value.sort((prev, curr) => curr.price - prev.price)

		case 'priceLow':
			return filteredItems.value.sort((prev, curr) => prev.price - curr.price)

		case 'popularity':
			return filteredItems.value.sort((prev, curr) => curr.popularity - prev.popularity)

		case 'newFirst':
			return filteredItems.value.sort((prev, curr) => (prev.new === curr.new) ? 0 : prev.new ? -1 : 1)
	}
}

</script>
