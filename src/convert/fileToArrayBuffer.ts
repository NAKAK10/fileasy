/**
 * FileからBufferに変換
 */
export const fileToArrayBuffer = (file: File): Promise<ArrayBuffer> => {
	if (typeof window === 'undefined')
		throw new Error('This function is only available on the client.')

	return new Promise((resolve, rejects) => {
		const reader = new FileReader()
		reader.onload = () => {
			const arrayBuffer = reader.result
			if (arrayBuffer instanceof ArrayBuffer) {
				resolve(arrayBuffer)
			} else {
				rejects()
			}
		}
		reader.readAsArrayBuffer(file)
	})
}
