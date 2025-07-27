const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
});