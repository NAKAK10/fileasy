![media](https://raw.githubusercontent.com/NAKAK10/fileasy/main/docs/public/media-dark.png)

# fileasy

- [conversion](#conversion)
- [get](#get)
- [other](#other)
- [types](#types)

## documantation

[fileasy.rucuru.com](https://fileasy.rucuru.com/)

## conversion

```js
const base64ToFile: (base64: string, fileName?: string, type?: string) => File
```

```js
const fileToBase64: (file: File) => Promise<string>
```

```js
// path: base64 | dataDUI | URL
const fileToHTMLImageElement: (path: string) => Promise<HTMLImageElement>
```

```js
const svgToJpeg: (svgData: string | File, name?: string, fillStyle?: string) => Promise<File>
```

```js
const jpegToPng: (svgData: string | File, name?: string) => Promise<File>
```

```js
const pngToJpeg: (svgData: string | File, name?: string, fillStyle?: string) => Promise<File>
```

```js
const svgToPng: (svgData: string | File, name?: string) => Promise<File>
```

```js
const pdfToPng: (pdfFile: File, pageNum?: number) => Promise<File[]>
```

## get

```js
const getInfoFromFile: (file: File) => Promise<GetInfoFromFile>
```

```js
const getMimeTypeFromBuffer: (data: Buffer) => string
```

```js
const getDataFromByte: (size: number) => {formatNum: number; unit: string; full: string;}
```

```js
const getTypeFromDataURI: (base64: string) => string
```

## other

```js
const downloadToDevice: (fileData?: GetInfoFromFile | File, name?: string) => void
```

```js
function downloadFromURL(url: string, type: string, name: string, fun?: ((rogress: number) => void) | undefined): Promise<File>
```

```js
const selectFile: (accept?: string, maxLen?: number) => Promise<File[] | undefined>
```

## types

```js
type GetInfoFromFile = {
	file: File,
	path: string,
	type: string,
	name: string,
	size: number,
	stringBytes: string,
	width: number,
	height: number,
	base64: string,
	extension: string,
}
```
