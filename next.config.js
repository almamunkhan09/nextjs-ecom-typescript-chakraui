/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  redirects: async () => {
    const redirects = [
      {
        source: '/',
        destination: '/products',
        permanent: true,
      },
    ];
    return await redirects;
  },
};

module.exports = nextConfig;
