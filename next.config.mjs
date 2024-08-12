/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/career/:slug',
          destination: 'https://career.example.agus.stiawan.site/:slug',
        },
        {
          source: '/career',
          destination: 'https://career.example.agus.stiawan.site',
        },
        {
          source: '/:path*',
          destination: 'https://example.agus.stiawan.site/:path*',
        },
      ]
    }
  };
  
  export default nextConfig;
  