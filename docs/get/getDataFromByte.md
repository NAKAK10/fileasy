# getDataFromByte

```ts
import { getDataFromByte } from 'fileasy'
```

## Example​

```ts
import { getDataFromByte } from 'fileasy'

const size = 2048

const data = getDataFromByte(size)

console.log(data)
// {
// 		formatNum: 2,
// 		unit: 'KB',
// 		full: '2KB',
// }
```
