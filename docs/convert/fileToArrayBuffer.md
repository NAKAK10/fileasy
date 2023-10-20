# fileToArrayBuffer

```ts
import { fileToArrayBuffer } from 'fileasy'
```

## Example​

```ts
import { fileToArrayBuffer, selectFile, isPng } from 'fileasy'

const file = await selectFile()
if (!file) return

const arrayBuffer = await fileToArrayBuffer(file[0])

console.log(arrayBuffer) // ArrayBuffer
```
