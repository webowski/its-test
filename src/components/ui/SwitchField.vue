<template>
	<label class="SwitchField">
		<input type="checkbox" class="Switch" v-model="isChecked"
		>
		<span class="SwitchField__label">{{$attrs.label}}</span>
	</label>
</template>

<script setup>
import { watch, ref, onBeforeMount } from 'vue'

const isChecked = ref(false)
const emit = defineEmits(['change'])

const props = defineProps({
	checked: {
    type: Boolean,
    default: false
  },
})

watch(isChecked, () => {
	emit('change', isChecked.value)
})

onBeforeMount(() => {
	isChecked.value = props.checked
})

defineExpose({
	isChecked,
})
</script>
