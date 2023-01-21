# pngToJpeg

```ts
import { pngToJpeg } from 'fileasy'
```

## Example​(file)

```ts
import { pngToJpeg, selectFile, isJpeg } from 'fileasy'

const image = await selectFile('image/png')
if (!image) return

const jpegFile = await pngToJpeg(image[0])
// const jpegFile = await pngToJpeg(filedata.base64, 'fileName', '#FF0000')

console.log(isJpeg(jpegFile)) // true
```

::: tip
`第3引数`に 16 真数のカラーコードを設定することで、background の色を変更することができます。
:::
