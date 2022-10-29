import { isMimeType } from '.'

export const isCsm = (data: File | string) => {
	return isMimeType(data, 'chemical/x-csml')
}
export const isEmb = (data: File | string) => {
	return isMimeType(data, 'chemical/x-embl-dl-nucleotide')
}
export const isGau = (data: File | string) => {
	return isMimeType(data, 'chemical/x-gaussian-input')
}
export const isMol = (data: File | string) => {
	return isMimeType(data, 'chemical/x-mdl-molfile')
}
export const isMop = (data: File | string) => {
	return isMimeType(data, 'chemical/x-mopac-input')
}
export const isPdb = (data: File | string) => {
	return isMimeType(data, 'chemical/x-pdb')
}
export const isXyz = (data: File | string) => {
	return isMimeType(data, 'chemical/x-xyz')
}
