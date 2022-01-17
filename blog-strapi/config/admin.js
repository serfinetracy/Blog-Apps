module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43998621bcfb0ff7661e4013f4e2701e'),
  },
});
