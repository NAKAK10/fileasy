# svgToJpeg

```ts
import { svgToJpeg } from 'fileasy'
```

## Example​(file)

```ts
import { svgToPsvgToJpegng, selectFile } from 'fileasy'

const file = selectFile('image/svg+xml')
if (!file.length) return

const png = await svgToJpeg(file[0], 'filename', '#FFF')
```

::: tip
`第3引数`に 16 真数のカラーコードを設定することで、background の色を変更することができます。
:::

## Example​(base64(DataURI))

```ts
import { svgToJpeg, selectFile } from 'fileasy'

const base64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR...'
// const base64 = 'PHN2ZyB4bWxucz0iaHR...'

const png = await svgToJpeg(base64)
```
