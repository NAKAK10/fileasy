export const copyToClipbord = (data: number | string | boolean) => {
	navigator.clipboard.writeText(String(data))
}
