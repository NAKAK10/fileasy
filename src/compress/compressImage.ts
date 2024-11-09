import { base64ToFile } from '../convert'
import { getInfoFromFile } from '../get'

/**
 * 画像を圧縮
 * per: quality()
 * size: compression ratio of size
 *
 */
export const compressImage = async (
  file: File,
  per: number,
  size: number = 100
): Promise<File> => {
  if (typeof window === 'undefined')
    throw new Error('This function is only available on the client.')

  const info = await getInfoFromFile(file)

  if (per > 100 || per < 0)
    throw new Error('Set the second argument between 0 and 100.')
  if (size > 100 || size < 0)
    throw new Error('Set the second argument between 0 and 100.')

  if (!info.type.includes('image')) {
    throw new Error('Only images can be compressed.')
  }

  const canvas = document.createElement('canvas')
  canvas.width = info.width * (size / 100)
  canvas.height = info.height * (size / 100)
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const image = new Image()
  return new Promise((resolve, rejects) => {
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      const base64 = canvas.toDataURL(info.type, per / 100)
      resolve(base64ToFile(base64, file.name))
    }
    image.src = info.path
  })
}
