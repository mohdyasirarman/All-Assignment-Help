/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3000',
    NEXT_PUBLIC_FRONTEND_URL: 'http://localhost:3002',
  },
};

module.exports = nextConfig;
