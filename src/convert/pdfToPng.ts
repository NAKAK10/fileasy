import { base64ToFile } from './base64ToFile'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'

export const pdfToPng = async (
	pdfFile: File,
	pageNum?: number
): Promise<File[]> => {
	// @ts-ignore
	const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry')
	GlobalWorkerOptions.workerSrc = pdfjsWorker

	const pdf = await getDocument(URL.createObjectURL(pdfFile)).promise

	const resData = await Promise.all(
		[...Array(pageNum || pdf.numPages).keys()].map(async (_, index) => {
			const page = await pdf.getPage(index + 1)
			const viewport = page.getViewport({ scale: 1.0 })
			const canvas = document.createElement('canvas')
			const context = canvas.getContext('2d') as CanvasRenderingContext2D
			canvas.height = viewport.height
			canvas.width = viewport.width
			const renderContext = {
				canvasContext: context,
				viewport: viewport,
			}
			await page.render(renderContext).promise
			const base64 = canvas.toDataURL('image/png')
			return base64ToFile(base64)
		})
	)

	return resData
}
