/** @type {import('next').NextConfig} */
// const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  // Enable static export
  // assetPrefix: isGithubPages ? '/portfolio/' : '',
  output: 'export',
  // distDir: 'out',
  trailingSlash: true,
  // Handle images
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  // Default settings
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // In a production application you might want to run TypeScript as part of the build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
