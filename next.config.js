/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	fontLoaders: [
		{ loader: '@next/font/google', options: { subsets: ['cyrillic'] } },
	],
}

module.exports = nextConfig
