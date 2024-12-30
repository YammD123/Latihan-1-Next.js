// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true, // Abaikan error TypeScript selama build
    },
    eslint: {
      ignoreDuringBuilds: true, // Abaikan linting selama build
    },
  };
  
  module.exports = nextConfig;
  
