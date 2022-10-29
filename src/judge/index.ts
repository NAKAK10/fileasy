import { getTypeFromDataURI } from '../get'

export const isMimeType = (data: File | string, type: string) => {
	if (typeof data === 'string') {
		return getTypeFromDataURI(data) === type
	}
	return data.type === type
}

export * from './application'
export * from './audio'
export * from './chemical'
export * from './image'
export * from './other'
export * from './text'
export * from './video'
