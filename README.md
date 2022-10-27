# fileasy

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
  (svgBase64: string, name?: string, fillStyle?: string) => Promise<File>
  ```
- svgToPng
  ```text
  (svgBase64: string, name?: string) => Promise<File>
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

## other

- easyDownload
  ```text
  (fileData?: GetInfoFromFile) => void
  ```
- copyToClipbord
  ```text
  (data: number | string | boolean) => void
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
