/**
 * base64からtypeを取得
 */
export const getTypeFromDataURI = (base64: string) => {
	if (!base64.includes('data:')) return ''
	const g = base64.match(/data:(.+);base64,/)
	if (!g || g.length < 2) return ''
	return g[1]
}
