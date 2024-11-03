/** @type {import('next').NextConfig} */
const nextConfig = {
    skipTrailingSlashRedirect: true,
    images: {
        domains: ['brennantibbetts.online', 'boxle.vercel.app'],
    },
    async rewrites() {
        return [
            //BOXLE
            {
                source: '/boxle/:path*',
                destination: 'https://boxle.vercel.app/:path*'
            },
            {
                source: '/boxle/assets/:path*',
                destination: 'https://boxle.vercel.app/assets/:path*'
            },
            {
                source: '/boxle/:file',
                destination: 'https://boxle.vercel.app/:file'
            },
            //PROFILE
            {
                source: '/portfolio/:path*',
                destination: 'https://brennantibbetts.online/:path*'
            },
            {
                source: '/portfolio/assets/:path*',
                destination: 'https://brennantibbetts.online/assets/:path*'
            },
            {
                source: '/css/:path*',
                destination: 'https://brennantibbetts.online/css/:path*'
            },
                        {
                source: '/models/:path*',
                destination: 'https://brennantibbetts.online/models/:path*'
            },
        ]
    }
};
export default nextConfig;