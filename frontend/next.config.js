/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
	webpack: (config) => {
		config.resolve.alias["@"] = __dirname + "/src";
		return config;
	},
	images: {
		domains: ["scontent.fmnl30-2.fna.fbcdn.net"],
	},
};

module.exports = nextConfig;
