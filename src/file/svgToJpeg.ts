import { base64ToFile } from './base64ToFile'

export const svgToJpeg = (
	svgBase64: string,
	name = '',
	fillStyle = '#ffffff'
): Promise<File> => {
	const _node = document.createElement('div')
	_node.innerHTML = window.atob(svgBase64.split(',')[1])
	const svg = _node.querySelector('svg') as SVGSVGElement
	const canvas = document.createElement('canvas')
	canvas.width = svg.width.baseVal.value
	canvas.height = svg.height.baseVal.value

	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

	ctx.fillStyle = fillStyle
	ctx.fillRect(0, 0, svg.width.baseVal.value, svg.height.baseVal.value)

	const image = new Image()

	return new Promise((resaolve, rejects) => {
		image.onload = () => {
			ctx.drawImage(image, 0, 0)
			const drawBase64 = canvas.toDataURL('image/jpeg')
			resaolve(base64ToFile(drawBase64, `${name}.jpeg` || 'tmpData.jpeg'))
		}
		image.src = svgBase64
	})
}
