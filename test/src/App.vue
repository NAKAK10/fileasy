<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { selectFile, getInfoFromFile, isApng } from '../../src'

const path = ref('')

const testFile = async () => {
	const image = await selectFile()
	if (!image) return
	const filedata = await getInfoFromFile(image[0])
	console.log(filedata)
}

nextTick(() => {
	console.log(isApng('snvjnsdvnksjdvn'))
})
</script>

<template>
	<button @click="testFile">selectFile</button>
	<img :src="path" v-if="path" />
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
