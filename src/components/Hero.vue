<template>
	<div class="Hero">

		<div class="Hero__container">
			<slot name="aside"></slot>
		</div>

		<Swiper
			class="Slider Hero__slider"
			:modules="[Navigation, Pagination]"
			:navigation="{
				nextEl: '.Slider__nav.-next',
				prevEl: '.Slider__nav.-prev',
				disabledClass: 'is-disabled',
			}"
			:slides-per-view="1"
			:space-between="0"
			:autoHeight="false"
			:pagination="{
				el: '.Slider__pagination',
				clickable: true
			}"
			@swiper="onSwiper"
			:loop="false"
		>
			<SwiperSlide class="Hero__slide">
				<img src="/media/hero-bg.jpg" alt="">
			</SwiperSlide>

			<SwiperSlide class="Hero__slide">
				<img src="/media/hero-bg.jpg" alt="">
			</SwiperSlide>

			<SwiperSlide class="Hero__slide">
				<img src="/media/hero-bg.jpg" alt="">
			</SwiperSlide>

			<SwiperSlide class="Hero__slide">
				<img src="/media/hero-bg.jpg" alt="">
			</SwiperSlide>

			<SwiperSlide class="Hero__slide">
				<img src="/media/hero-bg.jpg" alt="">
			</SwiperSlide>

			<SwiperSlide class="Hero__slide">
				<img src="/media/hero-bg.jpg" alt="">
			</SwiperSlide>

			<div class="Slider__nav -prev">
				<Icon name="chevron" />
			</div>

			<div class="Slider__nav -next">
				<Icon name="chevron" />
			</div>

			<div class="Slider__pagination"></div>

		</Swiper>

		<div class="Hero__text">
			<slot></slot>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Icon from '@/components/ui/Icon.vue'

const swiper = ref(null)

const onSwiper = (currentSwiper) => {
	swiper.value = currentSwiper
}
</script>
