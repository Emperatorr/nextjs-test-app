/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      // reactStrictMode: true,
      // domains: ['lh3.googleusercontent.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '**',
        },
      ],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
module.exports = nextConfig