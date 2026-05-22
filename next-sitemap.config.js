/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://3dulo.id',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/produk'),
    await config.transform(config, '/tentang'),
    await config.transform(config, '/blog'),
  ],
};
