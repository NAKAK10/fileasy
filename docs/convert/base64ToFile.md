# base64ToFile

```ts
import { base64ToFile } from 'fileasy'
```

## Example​

デフォルトのファイル名は`tmpData`です。

```ts
const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'

const file = base64ToFile(base64)

console.log(file.name)
// tmpData.png
```

## Example​(custom file name)

```ts
const base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...'

const file: File = base64ToFile(base64, 'tmpData', 'image/png')
```

::: warning
DataURI の**MIME-type**と base64ToFile の**第 3 引数**が異なる場合エラーを返します。
:::

## Example​(add Mime Type)

```ts
const base64 = 'iVBORw0KGgoAAAANSUhEUg...'

const file: File = base64ToFile(base64, 'tmp', 'image/png')
```
