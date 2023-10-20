const b2s = (blob: Blob): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.addEventListener('error', () => reject(reader.error))
		reader.addEventListener('load', () => {
			const { result } = reader
			if (typeof result !== 'string') throw TypeError('Not String')
			resolve(result)
		})
		reader.readAsText(blob)
	})
}

/**
 * ArrayBufferをstringに変換する
 */
export const binaryToString = async (data: ArrayBuffer | File) => {
	if (data instanceof File) {
		return await b2s(data)
	}

	try {
		const unit8 = new Uint8Array(data)
		let arr: number[] = []
		for (let i = 0; i < unit8.length; i++) {
			arr.push(unit8[i])
		}
		return String.fromCharCode.apply(null, arr)
	} catch {}

	const blob = new Blob([data])
	return await b2s(blob)
}
