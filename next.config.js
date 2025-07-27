const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/fresh_repo' : '',
  assetPrefix: isProd ? '/fresh_repo/' : '',
  images: {
    unoptimized: true
  }
});