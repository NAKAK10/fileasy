# svgToPng

```ts
import { svgToPng } from 'fileasy'
```

## Example​(file)

```ts
import { svgToPng, selectFile } from 'fileasy'

const file = selectFile('image/svg+xml')
if (!file.length) return

const png = await svgToPng(file[0])

// const png = await svgToPng(file[0], 'filename')
```

## Example​(base64(DataURI))

```ts
import { svgToPng, selectFile } from 'fileasy'

const base64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR...'
// const base64 = 'PHN2ZyB4bWxucz0iaHR...'

const png = await svgToPng(base64)
```
