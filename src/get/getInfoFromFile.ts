import { getDataFromByte } from './getDataFromByte'
import { fileToBase64, fileToHTMLImageElement } from '../convert'

import { GetInfoFromFile } from 'src/types'

/**
 * ファイルの情報を取得
 */
export const getInfoFromFile = async (file: File): Promise<GetInfoFromFile> => {
	const base64 = await fileToBase64(file)
	const path = URL.createObjectURL(file)

	const imageSize = { width: 0, height: 0 }
	if (file.type.includes('image')) {
		const image = await fileToHTMLImageElement(path)
		imageSize.width = image.width
		imageSize.height = image.height
	}

	return {
		file,
		path,
		type: file?.type,
		name: file?.name,
		size: file?.size,
		stringBytes: getDataFromByte(file?.size).full,
		width: imageSize.width,
		height: imageSize.height,
		base64,
		extension: file?.name.split('.').pop() ?? '',
	}
}
