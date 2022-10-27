/**
 * base64からtypeを取得
 */
export const getTypeFromDataURI = (base64: string) => {
	if (!base64.includes('data:')) return ''
	const g = base64.match(/data:(.+);base64,/)
	if (!g || g.length < 2) return ''
	return g[1]
}

/**
 * base64からFileに変換
 */
export const base64ToFile = (
	base64: string,
	fileName = '',
	type = ''
): File => {
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

	// ファイルオブジェクト生成(この例ではjpegファイル)
	return new File([buffer.buffer], `${fileName || 'tempData'}`, {
		type: getType || type,
	})
}
