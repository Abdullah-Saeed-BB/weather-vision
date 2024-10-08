/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'openweathermap.org',
              port: '',
              pathname: '/img/wn/**',
            },
        ],
        domains: ['openweathermap.org'],
    }
};

export default nextConfig;
