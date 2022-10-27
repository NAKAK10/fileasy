import { GetInfoFromFile } from 'src/types'

export const easyDownload = (fileData?: GetInfoFromFile | File) => {
	if (!fileData) return

	const a = document.createElement('a')
	if (fileData instanceof File) {
		a.href = URL.createObjectURL(fileData)
		a.download = fileData.name
	} else {
		a.href = fileData.base64
		a.download = `${fileData.name}.${fileData.extension}`
	}

	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
}
