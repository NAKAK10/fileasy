/**
 * Fileからbase64に変換
 */
export const fileToBase64 = (file: File): Promise<string> => {
  const reader = new FileReader()

  return new Promise((resolve, rejects) => {
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      } else {
        rejects()
      }
    }
    reader.onerror = function (error) {
      rejects()
    }

    reader.readAsDataURL(file)
  })
}
