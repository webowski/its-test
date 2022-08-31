<template>
	<div class="Dropdown"
		:class="[
			{ 'is-open': isOpen },
			$attrs.class
		]"
	>
		<button class="Dropdown__button" @click="toggleDropdown">
			<span>{{currentText}}</span>
			<Icon name="triangle" class="Dropdown__chevron" />
		</button>

		<div class="Dropdown__body">
			<ul class="Dropdown__list">

				<li class="Dropdown__item"
					v-for="item in list"
					:key="item.value"
					@click="selectItem"
					:val="item.value"
				>
					{{item.text}}
				</li>

			</ul>
		</div>

	</div>

	<Overlay
		style="--duration: var(--duration-lg)"
		:visible="isOpen"
		@click="isOpen = false"
	/>

</template>

<script setup>
import { computed, ref } from 'vue'
import Icon from './Icon.vue'
import Overlay from '@/components/ui/Overlay.vue'

const emit = defineEmits(['change'])

const list = [
	{value: 'priceHigh', text: 'Сначала дорогие'},
	{value: 'priceLow', text: 'Сначала недорогие'},
	{value: 'popularity', text: 'Сначала популярные'},
	{value: 'newFirst', text: 'Сначала новые'},
]

const currentValue = ref('priceHigh')

const isOpen = ref(false)

const	currentText = computed(() => {
	return getText(currentValue.value)
})

function toggleDropdown() {
	isOpen.value = !isOpen.value
}

function selectItem(e) {
	currentValue.value = e.target.attributes.val.value
	isOpen.value = false
	emit('change', currentValue.value)
}

function getText(value) {
	let wantedItem = list.find(item => item.value == value)
	return wantedItem.text
}
</script>
