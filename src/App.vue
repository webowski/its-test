<template>
  <Catalog />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Catalog from '@/views/Catalog.vue'
import { useBreakpointsStore } from '@/store/breakpoints'

const isBreakpoint = useBreakpointsStore()

onMounted(() => {
  handleWidthChange()
  window.addEventListener('resize', handleWidthChange)
})

onUnmounted(() => window.removeEventListener('resize', handleWidthChange))

function handleWidthChange() {
  isBreakpoint.setState()
}
</script>
