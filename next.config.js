// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export', 
//   basePath: '/site6',
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
//   // basePath: '/site6',
//   // assetPrefix: '/site6/',
//   trailingSlash: true, 
// };

// module.exports = nextConfig;

const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // required for static site export
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
};

module.exports = nextConfig;

