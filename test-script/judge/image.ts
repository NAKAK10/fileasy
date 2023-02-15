import { isSvg } from '../../src'
import { readFileSync } from 'fs'

test('isSvg', () => {
	const text: Buffer = readFileSync('./test-script/media/Add.svg')
	console.log(text.toString('base64'))
	expect(isSvg('aaa')).toBe(false)
})
