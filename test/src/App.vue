<script setup lang="ts">
import { ref } from 'vue'
import { selectFile as _selectFile, getInfoFromFile } from '../../src'
import { isPdf, downloadFromURL } from '../../src'

const path = ref('')

const selectFile = async () => {
	// const d = await _selectFile()
	// if (!d) return
	// const da = await getInfoFromFile(d[0])
	// console.log(isPdf(da.file))
	// console.log(isPdf(da.base64))

	const path = ''

	const file = await downloadFromURL(
		path,
		'abc.pdf',
		'application/pdf',
		(progress: number) => {
			console.log(progress)
		}
	)

	console.log(file)
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
