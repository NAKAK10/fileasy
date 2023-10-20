# fileToBase64

```ts
import { fileToBase64 } from 'fileasy'
```

## Example​

```ts
import { fileToBase64, selectFile } from 'fileasy'

const file = selectFile('image/png')
if (!file.length) return

const base64 = await fileToBase64(file[0])

console.log(base64)
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'
```
