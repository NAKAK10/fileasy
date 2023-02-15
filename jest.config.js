/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/test-script', '<rootDir>/src'],
	testEnvironment: 'jsdom', // クライアント側のテスト用
	transform: {
		'^.+\\.m?[tj]sx?$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.json',
			},
		],
	},
}
