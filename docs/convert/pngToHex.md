# pngToHex

```ts
import { pngToHex } from 'fileasy'
```

::: warning
This function is only available on the server.
サーバーでのみ使用できます。
:::

## Example​

```ts
import { pngToHex, PngToHex } from 'fileasy'
import { readFileSync } from 'fs'

const buffer: Buffer = readFileSync('./test-script/media/sample.png')

const res: PngToHex = await pngToHex(buffer)

console.log(res) // PngToHex
```

## Type

```ts
type PngToHex = {
	width: number
	height: number
	depth: number
	color: number
	compress: number
	filter: number
	interlac: number
	data: string[]
}
```
