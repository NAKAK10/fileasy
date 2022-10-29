import { isMimeType } from '.'

export const isAu = (data: File | string) => {
	return isMimeType(data, 'audio/basic')
}
export const isEs = (data: File | string) => {
	return isMimeType(data, 'audio/echospeech')
}
export const isMidi = (data: File | string) => {
	return isMimeType(data, 'audio/midi')
}
export const isMp3 = (data: File | string) => {
	return isMimeType(data, 'audio/mpeg')
}
export const isTsi = (data: File | string) => {
	return isMimeType(data, 'audio/tsplayer')
}
export const isQcp = (data: File | string) => {
	return isMimeType(data, 'audio/vnd.qcelp')
}
export const isRa = (data: File | string) => {
	return isMimeType(data, 'audio/vnd.rn-realaudio')
}
export const isVox = (data: File | string) => {
	return isMimeType(data, 'audio/voxware')
}
export const isAiff = (data: File | string) => {
	return isMimeType(data, 'audio/x-aiff')
}
export const isAba = (data: File | string) => {
	return isMimeType(data, 'audio/x-bamba')
}
export const isCha = (data: File | string) => {
	return isMimeType(data, 'audio/x-chacha')
}
export const isMio = (data: File | string) => {
	return isMimeType(data, 'audio/x-mio')
}
export const isM3u = (data: File | string) => {
	return isMimeType(data, 'audio/x-mpegurl')
}
export const isDxm = (data: File | string) => {
	return isMimeType(data, 'audio/x-pdxmidi')
}
export const isRam = (data: File | string) => {
	return isMimeType(data, 'audio/x-pn-realaudio')
}
export const isRpm = (data: File | string) => {
	return isMimeType(data, 'audio/x-pn-realaudio-plugin')
}
export const isVqf = (data: File | string) => {
	return isMimeType(data, 'audio/x-twinvq')
}
export const isVqe = (data: File | string) => {
	return isMimeType(data, 'audio/x-twinvq-plugin')
}
export const isWav = (data: File | string) => {
	return isMimeType(data, 'audio/audio/x-wav')
}
