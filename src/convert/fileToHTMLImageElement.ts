/**
 * pathからHTMLImageElementを作成
 */
export const fileToHTMLImageElement = async (
	path: string
): Promise<HTMLImageElement> => {
	const image = new Image()

	return new Promise((resolve, rejects) => {
		image.onload = () => {
			resolve(image)
		}
		image.src = path
	})
}
