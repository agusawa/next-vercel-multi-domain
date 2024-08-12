/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/career/:path*',
          destination: '/career/:path*',
          basePath: false,
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
          basePath: false,
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
  