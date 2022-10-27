import { base64ToFile } from './base64ToFile'

export const svgToPng = (svgBase64: string, name = ''): Promise<File> => {
	const _node = document.createElement('div')
	_node.innerHTML = window.atob(svgBase64.split(',')[1])
	const svg = _node.querySelector('svg') as SVGSVGElement
	const canvas = document.createElement('canvas')
	canvas.width = svg.width.baseVal.value
	canvas.height = svg.height.baseVal.value

	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
	const image = new Image()

	return new Promise((resaolve, rejects) => {
		image.onload = () => {
			ctx.drawImage(image, 0, 0)
			const drawBase64 = canvas.toDataURL('image/png')
			resaolve(base64ToFile(drawBase64, `${name}.png` || 'tmpData.png'))
		}
		image.src = svgBase64
	})
}
