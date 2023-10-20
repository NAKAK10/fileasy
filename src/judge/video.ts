import { isMimeType } from '.'

export const isMp4 = (data: File | string) => {
	return isMimeType(data, 'video/mp4')
}
export const is3gp = (data: File | string) => {
	return isMimeType(data, 'video/3gpp')
}
export const is3g2 = (data: File | string) => {
	return isMimeType(data, 'video/3gpp2')
}
export const isMpeg = (data: File | string) => {
	return isMimeType(data, 'video/mpeg')
}
export const isMov = (data: File | string) => {
	return isMimeType(data, 'video/quicktime')
}
export const isOgg = (data: File | string) => {
	return isMimeType(data, 'video/ogg')
}
export const isMxu = (data: File | string) => {
	return isMimeType(data, 'video/vnd.mpegurl')
}
export const isRv = (data: File | string) => {
	return isMimeType(data, 'video/vnd.rn-realvideo')
}
export const isVivo = (data: File | string) => {
	return isMimeType(data, 'video/vnd.vivo')
}
export const isWebm = (data: File | string) => {
	return isMimeType(data, 'video/webm')
}
export const isVba = (data: File | string) => {
	return isMimeType(data, 'video/x-bamba')
}
export const isMng = (data: File | string) => {
	return isMimeType(data, 'video/x-mng')
}
export const isAsf = (data: File | string) => {
	return isMimeType(data, 'video/x-ms-asf')
}
export const isWm = (data: File | string) => {
	return isMimeType(data, 'video/x-ms-wm')
}
export const isWmv = (data: File | string) => {
	return isMimeType(data, 'video/x-ms-wmv')
}
export const isWmx = (data: File | string) => {
	return isMimeType(data, 'video/x-ms-wmx')
}
export const isAvi = (data: File | string) => {
	return isMimeType(data, 'video/x-msvideo')
}
export const isQm = (data: File | string) => {
	return isMimeType(data, 'video/x-qmsys')
}
export const isMovie = (data: File | string) => {
	return isMimeType(data, 'video/x-sgi-movie')
}
export const isTgo = (data: File | string) => {
	return isMimeType(data, 'video/x-tango')
}
export const isVif = (data: File | string) => {
	return isMimeType(data, 'video/vif')
}
