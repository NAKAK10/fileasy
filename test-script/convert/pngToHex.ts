import { pngToHex } from '../../src'
import { readFileSync, writeFile } from 'fs'

test('pngToHex', async () => {
	const buffer = readFileSync('./test-script/media/sample_3.png')

	const res = await pngToHex(buffer)

	await new Promise((resolve, rejects) => {
		writeFile('./test/src/out.json', JSON.stringify(res), (err) => {
			if (err) rejects(err)
			resolve('OK')
		})
	})
})
