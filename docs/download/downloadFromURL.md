# downloadFromURL

```ts
import { downloadFromURL } from 'fileasy'
```

PC やスマホにダウンロードすることができます。

## Example​

```ts
import { downloadFromURL, getInfoFromFile } from 'fileasy'

const file = await downloadToDevice(
	'https://exmple.com/abc.png',
	'image/png',
	'abc.png'
)

console.log(file)
// File
```

::: info
ダウンロードの進捗状況を取得することができます。
:::

```ts
import { downloadToDevice } from 'fileasy'

const file = await downloadToDevice(
	'https://exmple.com/abc.png',
	'image/png',
	'abc.png',
	(rogress: number) => {
		console.log(rogress)
		// 0, 1, 2, 3, ... , 99, 100
	}
)

console.log(file)
// File
```
