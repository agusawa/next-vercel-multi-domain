/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:slug',
          destination: '/career/:slug',
          has: [
            {
              type: 'host',
              value: 'career.example.agus.stiawan.site',
            },
          ],
        },
        {
          source: '/:path*',
          destination: '/career/:path*',
          has: [
            {
              type: 'host',
              value: 'career.example.agus.stiawan.site',
            },
          ],
        },
        {
          source: '/:path*',
          destination: '/:path*',
          has: [
            {
              type: 'host',
              value: 'example.agus.stiawan.site',
            },
          ],
        },
      ]
    }
  };
  
  export default nextConfig;
  