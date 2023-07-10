/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nexus.traction.one',
            }
        ],
    }
}

module.exports = nextConfig
