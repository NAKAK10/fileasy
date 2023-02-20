import { isPng } from '../judge'
import { PngToHex } from '../types'

/**
 * rgbを16進数に変換
 */
const rgb2hex = (rgb: number[]) => {
	return `#${rgb.map((value) => `0${value.toString(16)}`.slice(-2)).join('')}`
}

/**
 * deflateされたものをinflate(解凍みたいなもの)
 */
const getByteArrayFromDeflatedData = async (
	bytes: number[]
): Promise<Buffer> => {
	const { inflate } = await import('zlib')
	const buffer = Buffer.from(bytes)
	return new Promise((resolve, rejects) => {
		inflate(buffer, (e, r) => {
			if (e) rejects(e)
			resolve(r)
		})
	})
}

/**
 * カラーを取得
 */
const getColor = (data: number[], com: number[]) => {
	const r = (data[0] + com[0]) % 256
	const g = (data[1] + com[1]) % 256
	const b = (data[2] + com[2]) % 256
	return [r, g, b]
}

/**
 *
 */
const paethPredictor = (a: number, b: number, c: number) => {
	const p = a + b - c
	const pa = Math.abs(p - a)
	const pb = Math.abs(p - b)
	const pc = Math.abs(p - c)
	if (pa <= pb && pa <= pc) return a
	else return pb <= pc ? b : c
}

/**
 * pngをhexに変更する
 */
export const pngToHex = async (buffer: Buffer): Promise<PngToHex> => {
	if (typeof window !== 'undefined')
		throw new Error('This function is only available on the server.')
	if (!isPng(buffer))
		throw new Error('This function is only available for png.')

	const { Buffer } = await import('buffer')

	const numArray: number[] = []
	for (let i = 0; i < buffer.length; i++) {
		numArray.push(buffer[i])
	}

	let IHDR: number[] = []
	let IDAT: number[] = []
	let IEND: number[] = []

	let ankerIndex = -1

	for (let i = 0; i < numArray.length; i++) {
		const a = Buffer.from(numArray.slice(i, i + 4)).toString('ascii')

		if (a.trim() === 'PNG') {
			ankerIndex = i
		} else if (a.trim() === 'IHDR') {
			ankerIndex = i
		} else if (a.trim() === 'IDAT') {
			if (!IHDR.length) {
				IHDR = numArray.slice(ankerIndex + 4, i + 1)
			} else {
				IDAT = IDAT.concat(numArray.slice(ankerIndex + 4, i + 5))
			}
			ankerIndex = i
		} else if (a.trim() === 'IEND') {
			IDAT = IDAT.concat(numArray.slice(ankerIndex + 4, i + 5))
			IEND = numArray.slice(i, numArray.length)
		}
	}

	const header = {
		width: parseInt(Buffer.from(IHDR.slice(0, 4)).toString('hex'), 16),
		height: parseInt(Buffer.from(IHDR.slice(4, 8)).toString('hex'), 16),
		depth: parseInt(Buffer.from(IHDR.slice(8, 9)).toString('hex'), 16),
		color: parseInt(Buffer.from(IHDR.slice(9, 10)).toString('hex'), 16),
		compress: parseInt(Buffer.from(IHDR.slice(10, 11)).toString('hex'), 16),
		filter: parseInt(Buffer.from(IHDR.slice(11, 12)).toString('hex'), 16),
		interlac: parseInt(Buffer.from(IHDR.slice(12, 13)).toString('hex'), 16), // 0:あり, 1:なし
		crc: parseInt(Buffer.from(IHDR.slice(13, 17)).toString('hex'), 16),
	}

	const decompressedColorBuffer = await getByteArrayFromDeflatedData(IDAT)

	const arrColor: number[] = []
	for (let i = 0; i < decompressedColorBuffer.length; i++) {
		arrColor.push(
			parseInt(Buffer.from([decompressedColorBuffer[i]]).toString('hex'), 16)
		)
	}

	let outerColor: number[][] = []
	for (let i = 0; i < arrColor.length; i += header.width * 3 + 1) {
		let ftype = 0

		// 現在の行
		const lineIndex = i / (header.width * 3 + 1)

		// 上の行
		const target_up_line = outerColor.slice(
			header.width * (lineIndex - 1),
			header.width * lineIndex
		)

		const lineColor: number[][] = []
		for (let ti = 0; ti < header.width * 3 - 1; ti++) {
			if (ti === 0) {
				ftype = parseInt(Buffer.from([arrColor[i + ti]]).toString('hex'), 16)
			} else {
				const comparison = arrColor.slice(i + ti, i + ti + 3)

				// そのまま
				if (ftype === 0) {
					lineColor.push(arrColor.slice(i + ti, i + ti + 3))
				}
				// 当該ピクセルの左隣のピクセルの色(フィルタリング前の値)との差分として保存されている。
				else if (ftype === 1) {
					const target_left = lineColor[lineColor.length - 1] || [0, 0, 0]
					lineColor.push(getColor(target_left, comparison))
				}
				// 当該ピクセルの直上のピクセルの色(フィルタリング前の値)との差分として保存されている。
				else if (ftype === 2) {
					const target_up = target_up_line[(ti - 1) / 3] || [0, 0, 0]
					lineColor.push(getColor(target_up, comparison))
				}
				// 当該ピクセルの左隣のピクセルと直上のピクセルの色(フィルタリング前の値)の平均との差分として保存されている。
				else if (ftype === 3) {
					const target_up = target_up_line[(ti - 1) / 3] || [0, 0, 0]
					const target_left = lineColor[lineColor.length - 1] || [0, 0, 0]
					const red = Math.floor((target_up[0] + target_left[0]) / 2)
					const green = Math.floor((target_up[1] + target_left[1]) / 2)
					const blue = Math.floor((target_up[2] + target_left[2]) / 2)

					lineColor.push(getColor([red, green, blue], comparison))
				}
				// 当該ピクセルの左隣、直上、左斜め上のピクセルの色から Paeth predictor という手法で選ばれた色との差分として保存されている。
				else if (ftype === 4) {
					const target_up = target_up_line[(ti - 1) / 3] || [0, 0, 0]
					const target_left = lineColor[lineColor.length - 1] || [0, 0, 0]
					const target_up_left = target_up_line[(ti - 1) / 3 - 1] || [0, 0, 0]

					const red = paethPredictor(
						target_left[0],
						target_up[0],
						target_up_left[0]
					)
					const green = paethPredictor(
						target_left[1],
						target_up[1],
						target_up_left[1]
					)
					const blue = paethPredictor(
						target_left[2],
						target_up[2],
						target_up_left[2]
					)
					lineColor.push(getColor([red, green, blue], comparison))
				}
				ti += 2
			}
		}

		outerColor = outerColor.concat(lineColor)
	}

	const res: string[] = []

	for (let i = 0; i < outerColor.length; i++) {
		res.push(rgb2hex(outerColor[i]))
	}

	return { ...header, ...{ data: res } }
}
