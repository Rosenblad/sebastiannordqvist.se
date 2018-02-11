export default {
	getRoutes: () => [
		{
			path: '/',
			component: 'src/components/App',
		},
	],
	paths: {
		src: 'src',
		dist: 'docs',
		devDist: 'dist',
		public: 'public',
	},
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