/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: 'https://library-management-tamnet.netlify.app/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig; 