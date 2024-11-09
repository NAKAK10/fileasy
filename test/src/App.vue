<script setup lang="ts">
import { ref, nextTick } from 'vue'
import {
  selectFile,
  getInfoFromFile,
  isApng,
  videoToPng,
  fileToBase64,
  compressImage,
} from '../../src'

const path = ref('')

const testFile = async () => {
  // const image = await selectFile('video/mp4, video/quicktime')
  const image = await selectFile('image/*')
  console.log(image)
  if (!image) return

  const res = await getInfoFromFile(image[0])
  console.log(res)

  const compressImageRes = await compressImage(image[0], 20, 50)

  path.value = (await getInfoFromFile(compressImageRes)).path

  // videoToPng(image[0])
  // 	.then((res) => {
  // 		console.log(res)
  // 		path.value = res
  // 	})
  // 	.catch((err) => {
  // 		console.log(err)
  // 	})
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
