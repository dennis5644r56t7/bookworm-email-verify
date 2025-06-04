/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: 'https://bookworm-hub-admin-iqjd.vercel.app/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig; 