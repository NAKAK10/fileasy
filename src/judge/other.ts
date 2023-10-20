import { isMimeType } from '.'

export const isVts = (data: File | string) => {
	return isMimeType(data, 'workbook/formulaone')
}
export const isPan = (data: File | string) => {
	return isMimeType(data, 'world/x-panoramix')
}
export const isIce = (data: File | string) => {
	return isMimeType(data, 'x-conference/x-cooltalk')
}
export const isD96 = (data: File | string) => {
	return isMimeType(data, 'x-world/x-d96')
}
export const isSvr = (data: File | string) => {
	return isMimeType(data, 'x-world/x-svr')
}
export const isVrml = (data: File | string) => {
	return isMimeType(data, 'x-world/x-vrml')
}
export const isVrt = (data: File | string) => {
	return isMimeType(data, 'x-world/x-vrt')
}
export const isUvr = (data: File | string) => {
	return isMimeType(data, 'Ulead/vrml')
}
