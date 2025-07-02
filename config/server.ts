export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  url: env('PUBLIC_URL', 'https://strapi-backend1-enxe.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
