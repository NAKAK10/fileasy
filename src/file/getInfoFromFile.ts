import { getDataFromByte } from './getDataFromByte'
import { fileToBase64 } from './fileToBase64'
import { fileToHTMLImageElement } from './fileToHTMLImageElement'

import { GetInfoFromFile } from 'src/types'

/**
 * ファイルの情報を取得
 */
export const getInfoFromFile = async (file: File): Promise<GetInfoFromFile> => {
	const base64 = await fileToBase64(file)
	const path = URL.createObjectURL(file)
	const image = await fileToHTMLImageElement(path)

	return {
		file,
		path,
		type: file?.type,
		name: file?.name,
		size: file?.size,
		stringBytes: getDataFromByte(file?.size).full,
		width: image.width,
		height: image.height,
		base64,
		extension: file?.name.split('.').pop() ?? '',
	}
}
