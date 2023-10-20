import { isMimeType } from '.'

// File | DataURI

export const isPdf = (data: File | string) => {
	return isMimeType(data, 'application/pdf')
}
export const isCgi = (data: File | string) => {
	return isMimeType(data, 'application/x-httpd-cgi')
}
export const isDoc = (data: File | string) => {
	return isMimeType(data, 'application/msword')
}
export const isDocs = (data: File | string) => {
	return isMimeType(
		data,
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	)
}
export const isAbw = (data: File | string) => {
	return isMimeType(data, 'application/x-abiword')
}
export const isArc = (data: File | string) => {
	return isMimeType(data, 'application/x-freearc')
}
export const isAzw = (data: File | string) => {
	return isMimeType(data, 'application/vnd.amazon.ebook')
}
export const isBin = (data: File | string) => {
	return isMimeType(data, 'application/octet-stream')
}
export const isBz = (data: File | string) => {
	return isMimeType(data, 'application/x-bzip')
}
export const isBz2 = (data: File | string) => {
	return isMimeType(data, 'application/x-bzip2')
}
export const isCsh = (data: File | string) => {
	return isMimeType(data, 'application/x-csh')
}
export const isEot = (data: File | string) => {
	return isMimeType(data, 'application/vnd.ms-fontobject')
}
export const isEpub = (data: File | string) => {
	return isMimeType(data, 'application/epub+zip')
}
export const isGz = (data: File | string) => {
	return isMimeType(data, 'application/gzip')
}
export const isJar = (data: File | string) => {
	return isMimeType(data, 'application/java-archive')
}
export const isJson = (data: File | string) => {
	return isMimeType(data, 'application/json')
}
export const isJsonId = (data: File | string) => {
	return isMimeType(data, 'application/ld+json')
}
export const isMpkg = (data: File | string) => {
	return isMimeType(data, 'application/vnd.apple.installer+xml')
}
export const isOdp = (data: File | string) => {
	return isMimeType(data, 'application/vnd.oasis.opendocument.presentation')
}
export const isOds = (data: File | string) => {
	return isMimeType(data, 'application/vnd.oasis.opendocument.spreadsheet')
}
export const isOdt = (data: File | string) => {
	return isMimeType(data, 'application/vnd.oasis.opendocument.text')
}
export const isOgx = (data: File | string) => {
	return isMimeType(data, 'application/ogg')
}
export const isPhp = (data: File | string) => {
	return isMimeType(data, 'application/x-httpd-php')
}
export const isPpt = (data: File | string) => {
	return isMimeType(data, 'application/vnd.ms-powerpoint')
}
export const isPptx = (data: File | string) => {
	return isMimeType(
		data,
		'application/vnd.openxmlformats-officedocument.presentationml.presentation'
	)
}
export const isRar = (data: File | string) => {
	return isMimeType(data, 'application/vnd.rar')
}
export const isSh = (data: File | string) => {
	return isMimeType(data, 'application/x-sh')
}
export const isSwf = (data: File | string) => {
	return isMimeType(data, 'application/x-shockwave-flash')
}
export const isTar = (data: File | string) => {
	return isMimeType(data, 'application/x-tar')
}
export const isVsd = (data: File | string) => {
	return isMimeType(data, 'application/vnd.visio')
}
export const isXhtml = (data: File | string) => {
	return isMimeType(data, 'application/xhtml+xml')
}
export const isXls = (data: File | string) => {
	return isMimeType(data, 'application/vnd.ms-excel')
}
export const isXlsx = (data: File | string) => {
	return isMimeType(
		data,
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	)
}
export const isXul = (data: File | string) => {
	return isMimeType(data, 'application/vnd.mozilla.xul+xml')
}
export const isZip = (data: File | string) => {
	return isMimeType(data, 'application/zip')
}
export const is7z = (data: File | string) => {
	return isMimeType(data, 'application/x-7z-compressed')
}
export const isJtd = (data: File | string) => {
	return isMimeType(data, 'application/x-js-taro')
}
