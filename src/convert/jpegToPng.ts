import { base64ToFile } from './base64ToFile'
import { fileToBase64 } from './fileToBase64'
import { isJpeg } from '../judge'
import { getInfoFromFile } from '../get'

export const jpegToPng = async (
	svgData: string | File,
	name = ''
): Promise<File> => {
	if (!isJpeg(svgData)) {
		throw new Error('There is an error in the first argument.')
	}

	if (typeof svgData === 'string') {
		svgData = base64ToFile(svgData)
	}

	const getInfo = await getInfoFromFile(svgData)
	const canvas = document.createElement('canvas')
	canvas.width = getInfo.width
	canvas.height = getInfo.height

	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
	ctx.fillRect(0, 0, getInfo.width, getInfo.height)

	const image = new Image()

	return new Promise((resolve, rejects) => {
		image.onload = () => {
			ctx.drawImage(image, 0, 0)
			const drawBase64 = canvas.toDataURL('image/png')
			resolve(base64ToFile(drawBase64, `${name || 'tmpData'}.png`))
		}
		fileToBase64(svgData as File).then((src) => {
			image.src = src
		})
	})
}
