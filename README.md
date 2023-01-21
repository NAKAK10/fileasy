![media](https://raw.githubusercontent.com/NAKAK10/fileasy/main/docs/public/media-dark.png)

# fileasy

- [conversion](#conversion)
- [get](#get)
- [other](#other)
- [types](#types)

## documantation

[fileasy.rucuru.com](https://fileasy.rucuru.com/)

## conversion

- base64ToFile
  ```text
  (base64: string, fileName?: string, type?: string) => File
  ```
- fileToBase64
  ```text
  (file: File) => Promise<string>
  ```
- fileToHTMLImageElement
  ```text
  (path: string) => Promise<HTMLImageElement>
  * path: base64 | dataDUI | URL
  ```
- svgToJpeg
  ```text
  (svgData: string | File, name?: string, fillStyle?: string) => Promise<File>
  ```
- jpegToPng
  ```text
  (svgData: string | File, name?: string) => Promise<File>
  ```
- pngToJpeg
  ```text
  (svgData: string | File, name?: string, fillStyle?: string) => Promise<File>
  ```
- svgToPng
  ```text
  (svgData: string | File, name?: string) => Promise<File>
  ```
- pdfToPng
  ```text
  (pdfFile: File, pageNum?: number) => Promise<File[]>
  ```

## get

- getInfoFromFile

  ```text
  (file: File) => Promise<GetInfoFromFile>
  ```

- getDataFromByte
  ```text
  (size: number) => {formatNum: number; unit: string; full: string;}
  ```
- selectFile
  ```text
  (accept?: string, maxLen?: number) => Promise<File[] | undefined>
  ```

## other

- downloadToDevice

  ```text
  (fileData?: GetInfoFromFile | File) => void
  ```

- downloadFromURL

  ```text
  (url: string, type: string, name: string, fun?: ((rogress: number) => void) | undefined): Promise<File>
  ```

- selectFile
  ```text
  (accept?: string, maxLen?: number) => Promise<File[] | undefined>
  ```

## types

- GetInfoFromFile

  ```text
  {
      file: File;
      path: string;
      type: string;
      name: string;
      size: number;
      stringBytes: string;
      width: number;
      height: number;
      base64: string;
      extension: string;
  }
  ```
