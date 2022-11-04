export default {
	lang: 'ja',
	title: 'fileasy',
	description: 'fileasy - Nakashima Package Manager',
	siteTitle: 'fileasy Docs',
	lastUpdated: true,

	head: [
		['meta', { property: 'og:image', content: '/media.png' }],
		['meta', { property: 'og:site_name', content: 'fileasy' }],
	],

	themeConfig: {
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/NAKAK10/fileasy' },
		],

		footer: {
			message: 'Hi👋',
			copyright: 'Copyright © 2022-present Keiju Nakashima',
		},

		sidebar: [
			{
				text: '',
				items: [{ text: 'install', link: 'public/install' }],
			},
			{
				text: 'get',
				collapsible: true,
				collapsed: true,
				items: [
					{ text: 'getInfoFromFile', link: '/get/getInfoFromFile' },
					{ text: 'getDataFromByte', link: '/get/getDataFromByte' },
					{ text: 'getTypeFromDataURI', link: '/get/getTypeFromDataURI' },
				],
			},
			{
				text: 'compress',
				collapsible: true,
				collapsed: true,
				items: [{ text: 'compressImage', link: '/compress/compressImage' }],
			},
			{
				text: 'convert',
				collapsible: true,
				collapsed: true,
				items: [
					{ text: 'base64ToFile', link: '/convert/base64ToFile' },
					{ text: 'fileToBase64', link: '/convert/fileToBase64' },
					{
						text: 'fileToHTMLImageElement',
						link: '/convert/fileToHTMLImageElement',
					},
					{ text: 'pdfToPng', link: '/convert/pdfToPng' },
					{ text: 'svgToPng', link: '/convert/svgToPng' },
					{ text: 'svgToJpeg', link: '/convert/svgToJpeg' },
				],
			},
			{
				text: 'judgement',
				collapsible: true,
				collapsed: true,
				items: [
					{ text: 'isMimeType', link: '/judge/isMimeType' },
					{ text: 'isMp3', link: '/judge/isMp3' },
					{ text: 'isMp4', link: '/judge/isMp4' },
					{ text: 'isPdf', link: '/judge/isPdf' },
					{ text: 'isXml', link: '/judge/isXml' },
				],
			},
			{
				text: 'download',
				collapsible: true,
				collapsed: true,
				items: [
					{ text: 'downloadToDevice', link: '/download/downloadToDevice' },
				],
			},
			{
				text: 'other',
				collapsible: true,
				collapsed: true,
				items: [{ text: 'selectFile', link: '/other/selectFile' }],
			},
		],
	},
}
