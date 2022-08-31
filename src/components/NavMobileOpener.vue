<template>
	<button
		class="NavMobileOpener"
		:class="{'is-open': nav.isMobileOpen}"
		@click="nav.setMobile(!nav.isMobileOpen)"
	>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</button>
</template>

<script setup>
import { useNavStore } from '@/store/nav'

const nav = useNavStore()
</script>
