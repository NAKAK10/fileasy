import { GetMimeTypeFromBuffer } from '../types'

const checkMime = (unit8: Uint8Array, check: number[]) => {
	let res = false

	if (unit8.length < check.length) return res

	res = true

	for (let i = 0; i < check.length; i++) {
		if (res) {
			res = check[i] === unit8[i]
		}
	}

	return res
}

/**
 * bufferからMIME Typeを取得する
 */
export const getMimeTypeFromBuffer = (data: Buffer): GetMimeTypeFromBuffer => {
	const uint8arr = new Uint8Array(data)

	// image
	if (checkMime(uint8arr, [137, 80, 78, 71])) {
		return 'image/png'
	} else if (checkMime(uint8arr, [255, 216, 255, 224])) {
		return 'image/jpeg'
	} else if (checkMime(uint8arr, [255, 216, 255, 238])) {
		return 'image/jpeg'
	} else if (checkMime(uint8arr, [71, 73, 70, 56, 57, 97])) {
		return 'image/gif'
	} else if (checkMime(uint8arr, [71, 73, 70, 56, 55, 97])) {
		return 'image/gif'
	} else if (checkMime(uint8arr, [73, 73, 42])) {
		return 'image/tiff'
	} else if (checkMime(uint8arr, [82, 73, 70, 70])) {
		return 'image/webp'
	} else if (/<svg(.+)svg>/g.test(data.toString().replace(/\n/g, ' '))) {
		return 'image/svg+xml'
	}

	// application
	else if (checkMime(uint8arr, [37, 80, 68, 70, 45, 49, 46, 52])) {
		return 'application/pdf'
	} else if (checkMime(uint8arr, [37, 80, 68, 70, 45, 49, 46, 51])) {
		return 'application/pdf'
	} else if (checkMime(uint8arr, [208, 207, 17, 224, 161, 177, 26, 225])) {
		return 'application/msword' // .doc
	}

	// video
	else if (checkMime(uint8arr, [0, 0, 0, 32, 102, 116, 121, 112])) {
		return 'video/mp4'
	}

	// audio
	else if (checkMime(uint8arr, [73, 68, 51])) {
		return 'audio/mpeg' // mp3
	}

	return 'application/octet-stream'
}
