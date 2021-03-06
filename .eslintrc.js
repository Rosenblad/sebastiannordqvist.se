module.exports = {
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react/jsx-filename-extension': 'off',
	},
};