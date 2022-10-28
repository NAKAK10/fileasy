<script setup lang="ts">
import { ref } from 'vue'
import { selectFile as _selectFile, pdfToPng } from '../../src'

const path = ref('')

const selectFile = async () => {
	const d = await _selectFile()
	if (!d) return

	const png = await pdfToPng(d[0], 100)
	path.value = URL.createObjectURL(png[0])
}
</script>

<template>
	<button @click="selectFile">selectFile</button>
	<img :src="path" v-if="path" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
