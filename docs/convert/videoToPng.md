# svgToPng

```ts
import { videoToPng } from 'fileasy'
```

## Example​(file)

```ts
import { videoToPng, selectFile } from 'fileasy'

const file = selectFile('video/mp4, video/quicktime')
if (!file.length) return

const base64 = await svgToPng(file[0])
console.log(base64)
// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
```
