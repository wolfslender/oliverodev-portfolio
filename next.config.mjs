/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ignoreBuildErrors: false,
  },
  images: {
    // unoptimized: true, // Disabled to enable Next.js Image Optimization
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // output: 'export', // Disabled to allow dynamic features and image optimization
  // trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
