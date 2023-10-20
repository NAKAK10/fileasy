# getTypeFromDataURI

```ts
import { getTypeFromDataURI } from 'fileasy'
```

## Example​

```ts
import { getTypeFromDataURI } from 'fileasy'

const base64 = 'data:image/png;base64,abcdefg...'

const data = getTypeFromDataURI(base64)

console.log(data)
// 'image/png'
```
