# downloadToDevice

```ts
import { downloadToDevice } from 'fileasy'
```

PC やスマホにダウンロードすることができます。

## Example​

```ts
import { downloadToDevice, getInfoFromFile } from 'fileasy'

const info = getInfoFromFile(data as File)

downloadToDevice(info)
```

::: info
`第2引数`にダウンロードする際のファイル名を設定することができます。
:::

```ts
import { downloadToDevice } from 'fileasy'

downloadToDevice(data as File, 'exmaple.png')
```
