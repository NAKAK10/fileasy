export default {
	lang: 'ja',
	title: 'fileasy',
	description: 'fileasy',
	siteTitle: 'fileasy Docs',
	socialLinks: [{ icon: 'github', link: 'https://github.com/NAKAK10/fileasy' }],
	themeConfig: {
		sidebar: [
			{
				text: 'get',
				items: [
					{ text: 'getInfoFromFile', link: '/get/getInfoFromFile' },
					{ tetx: 'getTypeFromDataURI', link: '/get/getTypeFromDataURI' },
					{ text: 'getDataFromByte', link: '/get/getDataFromByte' },
				],
			},
			{
				text: 'compress',
				items: [{ text: 'compressImage', link: '/compress/compressImage' }],
			},
			{
				text: 'convert',
				items: [
					{ text: 'base64ToFile', link: '/convert/base64ToFile' },
					{ text: 'fileToBase64', link: '/convert/fileToBase64' },
					{
						text: 'fileToHTMLImageElement',
						link: '/convert/fileToHTMLImageElement',
					},
					{ text: 'pdfToPng', link: '/convert/pdfToPng' },
					{ text: 'svgToJpeg', link: '/convert/svgToJpeg' },
					{ text: 'svgToPng', link: '/convert/svgToPng' },
				],
			},

			{
				text: 'download',
				items: [
					{ text: 'downloadToDevice', link: '/download/downloadToDevice' },
				],
			},
			{
				text: 'other',
				items: [{ text: 'selectFile', link: '/other/selectFile' }],
			},
		],
		footer: {
			message: 'Hi👋',
			copyright: 'Copyright © 2022-present Keiju Nakashima',
		},
	},
}
