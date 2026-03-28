
const dotenv = require('dotenv');
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

 images: {
    unoptimized: true, 
  },

  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
};

module.exports = nextConfig;


// const dotenv = require('dotenv');
// dotenv.config();

// const nextConfig = {
//   reactStrictMode: false,
//    images: {
//     unoptimized: true, // ✅ disables optimization
//   },
//   output: 'export', // required for static site export
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
//   trailingSlash: true,
// };

// module.exports = nextConfig;