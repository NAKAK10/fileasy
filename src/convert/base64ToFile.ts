import { getTypeFromDataURI } from '../get'

/**
 * base64からFileに変換
 */
export const base64ToFile = (
	base64: string,
	fileName = '',
	type = ''
): File => {
	if (typeof window === 'undefined')
		throw new Error('This function is only available on the client.')

	// base64のデコード
	const bin = window.atob(base64.replace(/^.*,/, ''))

	// バイナリデータ化
	const buffer = new Uint8Array(bin.length)
	for (let i = 0; i < bin.length; i++) {
		buffer[i] = bin.charCodeAt(i)
	}

	const getType = getTypeFromDataURI(base64)
	if (getType && type && getType !== type)
		throw new Error('第二引数を確認してください。')

	return new File([buffer.buffer], `${fileName || 'tmpData'}`, {
		type: getType || type,
	})
}
