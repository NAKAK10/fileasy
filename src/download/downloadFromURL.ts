/**
 * Download from URL
 */
export function downloadFromURL(
	url: string,
	type: string,
	name: string,
	fun?: (rogress: number) => void
): Promise<File> {
	const xhr = new XMLHttpRequest()

	xhr.open('GET', url, true)

	// プログレス
	xhr.onprogress = (evt: ProgressEvent) => {
		const load = (100 * evt.loaded) / evt.total || 0

		if (fun) {
			fun(load)
		}
	}

	xhr.responseType = 'blob' // Blobオブジェクトとしてダウンロードする

	// ダウンロード完了
	return new Promise((resolve, reject) => {
		xhr.addEventListener('error', () => {
			reject('Cannot download from this URL')
		})

		xhr.onload = (oEvent: ProgressEvent) => {
			const blob = xhr.response
			const file = new File([blob], name, { type: type })
			resolve(file)
		}

		xhr.send()
	})
}
