/**
 * success: mp4, mov
 * failed: avi, wmv, flv,
 *
 * @param videoFile video File
 * @param currentTime setting currentTime
 * @param secLimit setting timeout secounds
 *
 * @returns base64(png)
 */
export const videoToPng = async (
	videoFile: File,
	currentTime = 0,
	secLimit = 10
): Promise<string> => {
	const fileReader = new FileReader()

	return new Promise((resolve, rejects) => {
		setTimeout(() => {
			rejects('timeout')
		}, secLimit * 1000)

		const video = document.createElement('video')

		fileReader.onload = () => {
			if (fileReader.result === null) {
				return rejects('fileReader.result is null')
			}
			const blob = new Blob([fileReader.result], { type: videoFile.type })
			const url = URL.createObjectURL(blob)

			let currentCount = 0
			const createImage = () => {
				const canvas = document.createElement('canvas')
				canvas.width = video.videoWidth
				canvas.height = video.videoHeight
				const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
				const image = canvas.toDataURL('image/png')
				const success = image.length > 100000
				if (success) {
					resolve(image)
					setTimeout(() => {
						URL.revokeObjectURL(url) // Safari対策
					}, 2000)
				} else currentCount += 1
				return success
			}

			const timeupdate = () => {
				if (createImage()) {
					video.removeEventListener('timeupdate', timeupdate)
					video.pause()
				} else if (currentCount === 10) {
					video.removeEventListener('timeupdate', timeupdate)
					video.pause()
					rejects('snapshot failed')
				}
			}

			video.addEventListener('timeupdate', timeupdate)
			video.preload = 'metadata'
			video.src = url
			video.muted = true // Safari/IE11
			video.playsInline = true
			video.currentTime = currentTime
			video.play()
		}

		fileReader.readAsArrayBuffer(videoFile)
	})
}
