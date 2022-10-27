<script setup lang="ts">
import { selectFile as _selectFile } from '../../src'

const selectFile = async () => {
	const d = await _selectFile(undefined, 2)
	console.log(d)
}
</script>

<template>
	<button @click="selectFile">selectFile</button>
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
