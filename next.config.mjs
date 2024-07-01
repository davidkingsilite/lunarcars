/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       domains: ['cdn.imagin.studio']
    }
};

export default nextConfig;



// images: {
//     remotePatterns: [{
//      protocol: 'https',
//      hostname: 'cdn.imagin.studio',
//      pathname: 'getimage'
//     }]
//  }

// https://cdn.imagin.studio/getimage

// images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
