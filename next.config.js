/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configurações para Fast Refresh e Hot Reload em tempo real
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Desabilita cache para atualizações instantâneas
      config.cache = false
      
      // Configurações otimizadas de watch para hot reload
      config.watchOptions = {
        poll: 500, // Verifica mudanças a cada 500ms
        aggregateTimeout: 200, // Aguarda 200ms antes de recompilar
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
      
      // Habilita Fast Refresh
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      }
    }
    return config
  },
  
  // Desabilita otimizações em desenvolvimento para builds mais rápidos
  swcMinify: true,
  
  experimental: {
    optimizeCss: false,
  },
  
  // Desabilita cache de imagens em desenvolvimento
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig

