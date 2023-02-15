import { fileToArrayBuffer } from '../../src'
import { readFileSync } from 'fs'

test('fileToBuffer', async () => {
	const readfile = readFileSync('./test-script/media/sample.png')
	const file = new File([readfile.buffer], 'sample.png', {
		type: 'image/png',
	})
	const res = await fileToArrayBuffer(file)
	console.log(res)
})
