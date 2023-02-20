import { getMimeTypeFromBuffer } from '../../src'
import { readFileSync } from 'fs'

test('getMimeTypeFromBuffer(img)', () => {
	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.gif'))
	).toBe('image/gif')

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.tiff'))
	).toBe('image/tiff')

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.tiff'))
	).toBe('image/tiff')

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.webp'))
	).toBe('image/webp')

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.svg'))
	).toBe('image/svg+xml')

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.svg'))
	).toBe('image/svg+xml')

	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.png'))
	).toBe('image/png')
	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.png'))
	).toBe('image/png')
	expect(
		getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_3.png'))
	).toBe('image/png')

	// TODO
	// expect(
	// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_a.png'))
	// ).toBe('image/apng')
	// expect(
	// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_a_2.png'))
	// ).toBe('image/apng')
})

// test('getMimeTypeFromBuffer(application)', () => {
// expect(
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.docx'))
// ).toBe(
// 	'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
// )

// expect(
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.doc'))
// ).toBe('application/msword')

// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.zip'))
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.zip'))
// })

// test('getMimeTypeFromBuffer(audio)', () => {
// expect(
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.mp3'))
// ).toBe('audio/mpeg')
// })

// test('getMimeTypeFromBuffer(video)', () => {
// expect(
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.mp4'))
// ).toBe('video/mp4')
// })

// test('getMimeTypeFromBuffer(text)', () => {
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample.css'))
// 	getMimeTypeFromBuffer(readFileSync('./test-script/media/sample_2.css'))
// })
