/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ff7',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
