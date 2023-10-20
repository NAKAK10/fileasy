import { isPdf } from '../../src'
import { readFileSync } from 'fs'

test('isPdf', () => {
	const text = readFileSync('./test-script/media/Add.svg')
	console.log(text.toString('base64'))
	expect(isPdf('aaa')).toBe(false)
})
