/**
 * 入力されたファイルサイズを元に計算につかうバイト数と単位を返却
 */
export const getDataFromByte = (size: number) => {
	const kb = 1024
	const mb = Math.pow(kb, 2)
	const gb = Math.pow(kb, 3)
	const tb = Math.pow(kb, 4)

	if (size >= tb) {
		const formatNum = Math.floor(size / tb)
		return {
			formatNum,
			unit: 'TB',
			full: `${formatNum.toLocaleString()}TB`,
		}
	}
	if (size >= gb) {
		const formatNum = Math.floor(size / gb)
		return {
			formatNum,
			unit: 'GB',
			full: `${formatNum.toLocaleString()}GB`,
		}
	}
	if (size >= mb) {
		const formatNum = Math.floor(size / mb)
		return {
			formatNum,
			unit: 'MB',
			full: `${formatNum.toLocaleString()}MB`,
		}
	}
	if (size >= kb) {
		const formatNum = Math.floor(size / kb)
		return {
			formatNum,
			unit: 'KB',
			full: `${formatNum.toLocaleString()}KB`,
		}
	}

	return {
		formatNum: Math.floor(size),
		unit: 'byte',
		full: `${Math.floor(size).toLocaleString()}byte`,
	}
}
