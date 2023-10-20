# jpegToPng

```ts
import { jpegToPng } from 'fileasy'
```

## Example​(file)

```ts
import { jpegToPng, selectFile, isPng } from 'fileasy'

const image = await selectFile('image/jpeg')
if (!image) return

const pngFile = await jpegToPng(image[0])

console.log(isPng(pngFile)) // true
```

## Example​(DataURI)

```ts
import { jpegToPng, selectFile, isPng } from 'fileasy'

const base64 = 'data:image/jpeg;base64,PHN2ZyB4bWxucz0iaHR...'

const png = await jpegToPng(base64)

console.log(isPng(pngFile)) // true
```
