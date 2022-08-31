<template>
	<div class="CatalogSorting">

	</div>
</template>

<script setup>
import Dropdown from '../ui/Dropdown.vue';

const filtered = [
  {price: 20, date: '12-12-2020'},
  {price: 15, date: '23-12-2019'},
  {price: 23, date: '12-12-2028'},
].sort((prev, curr) => prev.price - curr.price);

</script>
