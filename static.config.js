import Document from './src/Document';

export default {
	siteRoot: 'http://sebastiannordqvist.se',
	Document: Document,
	getRoutes: () => [
		{
			path: '/',
			component: 'src/components/App',
		},
	],
	webpack: (config, { defaultLoaders, stage }) => {
		config.module.rules = [
			{
				oneOf: [
					{
						test: /\.html$/,
						use: 'html-loader',
					},
					defaultLoaders.cssLoader,
					defaultLoaders.jsLoader,
					defaultLoaders.fileLoader,
				],
			},
		];

		return config;
	},
};