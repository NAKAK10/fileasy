import { base64ToFile } from './base64ToFile'
import { fileToBase64 } from './fileToBase64'
import { getTypeFromDataURI } from '../get'

export const svgToJpeg = async (
	svgData: string | File,
	name = '',
	fillStyle = '#ffffff'
): Promise<File> => {
	const _node = document.createElement('div')

	if (typeof svgData !== 'string') {
		svgData = await fileToBase64(svgData)
	}

	const type = getTypeFromDataURI(svgData)
	if (!type) svgData = `data:image/svg+xml;base64,${svgData}`

	_node.innerHTML = window.atob(svgData.split(',')[1])
	const svg = _node.querySelector('svg') as SVGSVGElement
	const canvas = document.createElement('canvas')
	canvas.width = svg.width.baseVal.value
	canvas.height = svg.height.baseVal.value

	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

	ctx.fillStyle = fillStyle
	ctx.fillRect(0, 0, svg.width.baseVal.value, svg.height.baseVal.value)

	const image = new Image()

	return new Promise((resolve, rejects) => {
		image.onload = () => {
			ctx.drawImage(image, 0, 0)
			const drawBase64 = canvas.toDataURL('image/jpeg')
			resolve(base64ToFile(drawBase64, `${name}.jpeg` || 'tmpData.jpeg'))
		}
		image.src = svgData as string
	})
}
