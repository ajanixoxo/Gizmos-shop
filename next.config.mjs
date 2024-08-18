/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mdbootstrap.com',
          port: '', // You can remove this line if there's no specific port
          pathname: '/img/new/slides/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  