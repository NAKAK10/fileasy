# fileToHTMLImageElement

```ts
import { fileToHTMLImageElement } from 'fileasy'
```

## Example​

```ts
import { fileToHTMLImageElement, selectFile } from 'fileasy'

const file = selectFile()
if (!file) return

const element = await fileToHTMLImageElement(file)

console.log(element)
// HTMLImageElement
```
