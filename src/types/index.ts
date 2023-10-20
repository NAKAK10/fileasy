export type GetInfoFromFile = {
	file: File
	path: string
	type: string
	name: string
	size: number
	stringBytes: string
	width: number
	height: number
	base64: string
	extension: string
}

export type GetMimeTypeFromBuffer =
	| 'image/png'
	| 'image/jpeg'
	| 'image/gif'
	| 'image/tiff'
	| 'image/webp'
	| 'image/svg+xml'
	| 'application/pdf'
	| 'application/msword'
	| 'video/mp4'
	| 'audio/mpeg'
	| 'application/octet-stream'

export type PngToHex = {
	width: number
	height: number
	depth: number
	color: number
	compress: number
	filter: number
	interlac: number
	data: string[]
}
