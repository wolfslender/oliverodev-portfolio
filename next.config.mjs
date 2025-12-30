/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ignoreBuildErrors: false,
  },
  output: 'export',
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
  // trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
