import { base64ToFile } from './base64ToFile'
import { fileToBase64 } from './fileToBase64'
import { getTypeFromDataURI } from '../get'

export const svgToPng = async (
	svgData: string | File,
	name = ''
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
	const image = new Image()

	return new Promise((resolve, rejects) => {
		image.onload = () => {
			ctx.drawImage(image, 0, 0)
			const drawBase64 = canvas.toDataURL('image/png')
			resolve(base64ToFile(drawBase64, `${name}.png` || 'tmpData.png'))
		}
		image.src = svgData as string
	})
}
