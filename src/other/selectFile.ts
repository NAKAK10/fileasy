export const selectFile = (
	accept = '',
	maxLen = 1
): Promise<File[] | undefined> => {
	if (maxLen < 1) throw { message: 'invalid number' }
	const _inputfile = document.createElement('input')
	_inputfile.type = 'file'

	if (accept) {
		_inputfile.accept = accept
	}

	if (maxLen > 1) {
		_inputfile.multiple = true
	}

	document.body.appendChild(_inputfile)

	return new Promise((resolve, rejects) => {
		_inputfile.addEventListener('change', (_d) => {
			const files = (_d.target as any).files as undefined | FileList

			if (files instanceof FileList) {
				const fileArr = Array.from(files)

				if (fileArr.length > maxLen) {
					fileArr.length = maxLen
					resolve(fileArr)
				}

				resolve(fileArr)
			} else {
				resolve(undefined)
			}
			_inputfile.remove()
		})

		_inputfile.addEventListener('cancel', () => {
			resolve(undefined)
		})

		_inputfile.click()
		_inputfile.remove()
	})
}
