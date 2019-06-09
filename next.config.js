const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : 'http://localhost:8000/2016-08-15/proxy/jr-alpha-fc-rendering/next-demo/',
};
