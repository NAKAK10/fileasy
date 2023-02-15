import { getMimeTypeFromBuffer } from '../../src'
import { readFileSync } from 'fs'

test('getMimeTypeFromBuffer', () => {
	// expect(
	// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.gif'))
	// ).toBe('image/gif')

	// expect(
	// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.tiff'))
	// ).toBe('image/tiff')

	// expect(
	// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.tiff'))
	// ).toBe('image/tiff')

	// expect(
	// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.mp3'))
	// ).toBe('audio/mpeg')

	// getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.csv'))
	// getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.csv'))

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.mp4'))
	).toBe('video/mp4')
})
