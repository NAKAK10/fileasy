# getMimeTypeFromBuffer

```ts
import { getMimeTypeFromBuffer } from 'fileasy'
```

## Example​

```ts
import { getMimeTypeFromBuffer } from 'fileasy'
import { readFileSync } from 'fs'

const gifData = getMimeTypeFromBuffer(
	readFileSync('./test-script/media/sample.gif')
)
console.log(gifData) // 'image/gif'

const svgData = getMimeTypeFromBuffer(
	readFileSync('./test-script/media/sample_2.svg')
)
console.log(svgData) // 'image/svg+xml'

const pngData = getMimeTypeFromBuffer(
	readFileSync('./test-script/media/sample.png')
)
console.log(pngData) // 'image/png'
```

::: warning
サポートしている MIME type は下記の`GetMimeTypeFromBuffer`のみです。
検出できていないものに関しては`application/octet-stream`を返します。
:::

## Type

```ts
type GetMimeTypeFromBuffer =
	| 'image/png'
	| 'image/jpeg'
	| 'image/gif'
	| 'image/tiff'
	| 'image/webp'
	| 'image/svg+xml'
	| 'application/pdf'
	| 'application/msword'
	| 'video/mp4'
	| 'audio/mpeg'
	| 'application/octet-stream'
```
