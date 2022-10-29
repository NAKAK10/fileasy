import { isMimeType } from '.'

export const isApng = (data: File | string) => {
	return isMimeType(data, 'image/apng')
}
export const isAvif = (data: File | string) => {
	return isMimeType(data, 'image/avif')
}
export const isGif = (data: File | string) => {
	return isMimeType(data, 'image/gif')
}
export const isJpeg = (data: File | string) => {
	return isMimeType(data, 'image/jpeg')
}
export const isPng = (data: File | string) => {
	return isMimeType(data, 'image/png')
}
export const isSvg = (data: File | string) => {
	return isMimeType(data, 'image/svg+xml')
}
export const isWebp = (data: File | string) => {
	return isMimeType(data, 'image/webp')
}
export const isTiff = (data: File | string) => {
	return isMimeType(data, 'image/tiff')
}
