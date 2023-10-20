# binaryToString

```ts
import { binaryToString } from 'fileasy'
```

## Example​(file)

```ts
import { binaryToString, selectFile, isPng } from 'fileasy'

const file = await selectFile() // csv, svg, txt, etc...
if (!file) return

const str = await binaryToString(file[0])

console.log(str) // string
```

## Example​(ArrayBuffer)

```ts
import { binaryToString, selectFile, fileToArrayBuffer } from 'fileasy'

const file = await selectFile() // csv, svg, txt, etc...
if (!file) return

const arrayBuffer = await fileToArrayBuffer(file[0])

const str = await binaryToString(arrayBuffer)

console.log(str) // string
```
