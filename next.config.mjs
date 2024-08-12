/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/career',
          has: [
            {
              type: 'host',
              value: 'career.example.agus.stiawan.site',
            },
          ],
        },
        {
          source: '/contact-us',
          destination: '/career/contact-us',
          has: [
            {
              type: 'host',
              value: 'career.example.agus.stiawan.site',
            },
          ],
        },
        {
          source: '/about-us',
          destination: '/career/about-us',
          has: [
            {
              type: 'host',
              value: 'career.example.agus.stiawan.site',
            },
          ],
        },
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
  