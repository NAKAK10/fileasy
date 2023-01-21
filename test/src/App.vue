<script setup lang="ts">
import { ref } from 'vue'
import { selectFile, getInfoFromFile } from '../../src'
import { jpegToPng, isPng } from '../../src'

const path = ref('')

const testFile = async () => {
	const image = await selectFile('image/jpeg')
	if (!image) return
	const filedata = await getInfoFromFile(image[0])

	const a = await jpegToPng(filedata.base64)

	console.log(isPng(a))
}
</script>

<template>
	<button @click="testFile">selectFile</button>
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
