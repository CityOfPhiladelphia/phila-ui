const path = require('path')
const glob = require('globby')
const cwd = path.join(__dirname, '..')
const { parse } = require('vue-docgen-api')

module.exports = async () => {
	const docFiles = glob.sync('components/**/*.md', { cwd }).map((f) => '/' + f)
	const components = await Promise.all(
		glob.sync('../../src/components/**/*.{vue,js,jsx,ts,tsx}', { cwd, absolute: true }).map(async (path) => {
			return {
				name: (await parse(path)).displayName.replace(/[^a-zA-Z0-9_]/g, ''),
				path
			}
		})
	)

	return {
		base: "/",
		title: 'phila-ui',
		themeConfig: {
			// logo: '/assets/phila-ui.png',
			sidebar: [
				{
					title: 'Intro',
					collapsable: false, // optional, defaults to true
					sidebarDepth: 1,
					children: [
						'/'
					]
				},
				{
					title: 'Components',   // required
					children: docFiles
				},
			]
		},
		plugins: [
			['live'],
			[
				'@vuepress/plugin-register-components',
				{
					components,
				}
			]
		],
		scss: {
			data: `
				@import "~@styles/all.scss";
				@import "~@styles/functions.scss";
				`
		},
		configureWebpack: {
			resolve: {
				alias: {
					"@styles": path.resolve(__dirname, '../../../src/styles')
				}
			}
		},
	}
}
