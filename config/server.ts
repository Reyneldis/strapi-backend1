export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  url: env('PUBLIC_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
