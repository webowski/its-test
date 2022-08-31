<template>
	<Header />
	<main class="Main">
		<slot></slot>
	</main>
	<Footer />
	<CartPanel />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CartPanel from '@/components/cart/CartPanel.vue';
</script>
