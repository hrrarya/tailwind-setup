const mode = "dev";

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		"prod" === mode && require('@fullhuman/postcss-purgecss')({
			content: [
				'./public/*.html'
			],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
		})
	]
}