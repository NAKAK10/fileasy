<script setup lang="ts">
import { ref } from 'vue'
import { selectFile, getInfoFromFile } from '../../src'
import data from './out.json'

const path = ref('')

const testFile = async () => {
	const image = await selectFile()
	if (!image) return
	const filedata = await getInfoFromFile(image[0])
	console.log(filedata)
}
</script>

<template>
	<button @click="testFile">selectFile</button>
	<img :src="path" v-if="path" />

	<div class="_test" :style="`width: ${data.width * 3}px`">
		<div
			v-for="(n, index) in data.data"
			:key="index"
			:style="`background: ${n}; width: 3px; height: 3px;`"
		></div>
	</div>
</template>

<style scoped>
._test {
	display: flex;
	flex-wrap: wrap;
}
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
