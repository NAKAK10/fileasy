import { GetInfoFromFile } from 'src/types'

/**
 * 端末にダウンロードする
 */
export const downloadToDevice = (
	fileData?: GetInfoFromFile | File,
	name?: string
) => {
	if (!fileData) return

	const a = document.createElement('a')
	if (fileData instanceof File) {
		a.href = URL.createObjectURL(fileData)
		a.download = name || fileData.name
	} else {
		a.href = fileData.base64
		a.download = name || `${fileData.name}.${fileData.extension}`
	}

	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
}
