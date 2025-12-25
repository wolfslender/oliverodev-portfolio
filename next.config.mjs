/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
