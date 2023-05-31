import { getTypeFromDataURI, getMimeTypeFromBuffer } from '../get'

export const isMimeType = (data: File | string | Buffer, type: string) => {
	// Buffer is only available in Server
	if (typeof window === 'undefined' && data instanceof Buffer) {
		return getMimeTypeFromBuffer(data) === type
	} else if (typeof data === 'string') {
		return getTypeFromDataURI(data) === type
	}
	return (data as File).type === type
}

export * from './application'
export * from './audio'
export * from './chemical'
export * from './image'
export * from './other'
export * from './text'
export * from './video'
