import { GetInfoFromFile } from 'src/types'

export const easyDownload = (fileData?: GetInfoFromFile) => {
	if (!fileData) return

	const a = document.createElement('a')
	a.href = fileData.base64
	a.download = `${fileData.name}.${fileData.extension}`

	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
}
