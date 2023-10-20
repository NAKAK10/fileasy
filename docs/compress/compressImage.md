# compressImage

```ts
import { compressImage } from 'fileasy'
```

画像のサイズを縮小と画像の圧縮が可能です。

## Example​(compress)

```ts
import { compressImage, selectFile } from 'fileasy'

const compress = async () => {
	const file = selectFile()
	if (!file.length) return

	console.log(file[0].size)
	// 1024

	const compressedFile = await compressImage(file[0], 50)

	console.log(compressedFile.size)
	// 800
}
```

## Example​(resize)

```ts
import { compressImage, selectFile, getInfoFromFile } from 'fileasy'

const compress = async () => {
	const file = selectFile()
	if (!file.length) return

	console.log(await getInfoFromFile(file[0]))
	// {
	// ...
	// width: 1000,
	// height: 1000,
	// ...
	// }

	const compressedFile = await compressImage(file, 100, 50)

	console.log(await getInfoFromFile(compressedFile))
	// {
	// ...
	// width: 500,
	// height: 500,
	// ...
	// }
}
```
