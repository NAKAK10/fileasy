# pdfToPng

```ts
import { pdfToPng } from 'fileasy'
```

## Example​

```ts
import { pdfToPng, selectFile } from 'fileasy'

const file = selectFile('application/pdf')
if (!file.length) return

const pngs: File[] = await pdfToPng(file[0])
console.log(pngs.length)

const pngs: File[] = await pdfToPng(file[0], 1)
console.log(pngs.length)
```

::: info
第２引数で png を作成するページ枚数を指定できます。<br/>
デフォルトでは、すべてのページを変換します。
:::

::: info
PDF.js を元に作成しています。
:::
