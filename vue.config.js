const {defineConfig} = require('@vue/cli-service')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const path = require("path")

module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		plugins: [
			// new HardSourceWebpackPlugin()
		],
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				'@views': path.join(__dirname, 'src/views/modules'),
				'@components': path.join(__dirname, 'src/components'),
				'@plugins': path.join(__dirname, 'src/plugins'),
				'@pages': path.join(__dirname, 'src/pages/modules'),
			}
		}
	}
})
