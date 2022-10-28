# getInfoFromFile

```ts
import { getInfoFromFile } from 'fileasy'

import type { GetInfoFromFile } from 'fileasy'
```

## Example​

```ts
import { getInfoFromFile, downloadToDevice } from 'fileasy'

const file: File = await downloadToDevice('image/png')

const info = await getInfoFromFile(file)

console.log(info)
// {
//   file: File
//   path: 'https://exmple.com/...'
//   type: 'image/png'
//   name: 'tmp'
//   size: 1024
//   stringBytes: '1KB'
//   width: 500
//   height: 500
//   base64: 'data:image/png;base64,abcdefg...'
//   extension: 'png'
// }
```

## Type

```ts
type GetInfoFromFile = {
	file: File
	path: string
	type: string
	name: string
	size: number
	stringBytes: string
	width: number
	height: number
	base64: string
	extension: string
}
```
