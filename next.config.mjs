/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // Ajouter MJML aux packages externes des composants serveur
      serverComponentsExternalPackages: ["mjml"],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Ignorer certains modules spécifiques à Node.js côté client
        config.resolve.fallback = {
          fs: false,
          path: false,
          os: false,
        };
      }
  
      return config;
    },
  };
  
  export default nextConfig;