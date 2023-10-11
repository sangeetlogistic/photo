/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['media.image2painting.com', 'image2painting.com'],
    },
    lessLoaderOptions: {},
};

module.exports = withLess(nextConfig);
