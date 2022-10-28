import { base64ToFile } from '../convert'
import { getInfoFromFile } from '../get'

/**
 * 画像を圧縮
 */
export const compressImage = async (
	file: File,
	per: number,
	size: number = 100
): Promise<File> => {
	const info = await getInfoFromFile(file)

	if (per > 100 || per < 0)
		throw new Error('第二引数は、0から100の間で設定してください。')
	if (size > 100 || size < 0)
		throw new Error('第二引数は、0から100の間で設定してください。')

	if (!info.type.includes('image')) throw new Error('画像のみ圧縮可能です。')

	const canvas = document.createElement('canvas')
	canvas.width = info.width * (size / 100)
	canvas.height = info.height * (size / 100)
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

	const image = new Image()
	return new Promise((resolve, rejects) => {
		image.onload = () => {
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
			const base64 = canvas.toDataURL(info.type, per / 100)
			resolve(base64ToFile(base64))
		}
		image.src = info.path
	})
}
