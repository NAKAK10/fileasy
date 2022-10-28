# selectFile

```ts
import { selectFile } from 'fileasy'
```

## Example​

```ts
import { selectFile } from 'fileasy'

const files = await selectFile()

console.log(files)
// File[] | undefined
```

accept と選択する上限枚数を設定できます。

```ts
import { selectFile } from 'fileasy'

const files = await selectFile('image/*', 5)

console.log(files)
// File[] | undefined
```
