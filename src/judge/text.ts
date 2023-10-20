import { isMimeType } from '.'

export const isManifest = (data: File | string) => {
	return isMimeType(data, 'text/cache-manifest')
}
export const isCss = (data: File | string) => {
	return isMimeType(data, 'text/css')
}
export const isCsv = (data: File | string) => {
	return isMimeType(data, 'text/csv')
}
export const isHtml = (data: File | string) => {
	return isMimeType(data, 'text/html')
}
export const isTxt = (data: File | string) => {
	return isMimeType(data, 'text/plain')
}
export const isRxt = (data: File | string) => {
	return isMimeType(data, 'text/richtext')
}
export const isRtf = (data: File | string) => {
	return isMimeType(data, 'text/rtf')
}
export const isSgml = (data: File | string) => {
	return isMimeType(data, 'text/sgml')
}
export const isTsv = (data: File | string) => {
	return isMimeType(data, 'text/tab-separated-values')
}
export const isRt = (data: File | string) => {
	return isMimeType(data, 'text/vnd.rn-realtext')
}
export const isJad = (data: File | string) => {
	return isMimeType(data, 'text/vnd.sun.j2me.app-descriptor')
}
export const isWml = (data: File | string) => {
	return isMimeType(data, 'text/vnd.wap.wml')
}
export const isWmls = (data: File | string) => {
	return isMimeType(data, 'text/vnd.wap.wmlscript')
}
export const isHtc = (data: File | string) => {
	return isMimeType(data, 'text/x-component')
}
export const isMrl = (data: File | string) => {
	return isMimeType(data, 'text/x-mrml')
}
export const isEtx = (data: File | string) => {
	return isMimeType(data, 'text/x-setext')
}
export const isTalk = (data: File | string) => {
	return isMimeType(data, 'text/x-speech')
}
export const isVcs = (data: File | string) => {
	return isMimeType(data, 'text/x-vcalendar')
}
export const isXml = (data: File | string) => {
	return isMimeType(data, 'text/xml')
}
export const isVcf = (data: File | string) => {
	return isMimeType(data, 'text/x-vcard')
}
