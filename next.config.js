const withLess = require('next-with-less');

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['media.image2painting.com', 'image2painting.com'],
    },
    lessLoaderOptions: {},
    publicRuntimeConfig: {
        DOMAIN: 'https://image2painting.com',
    },
};

module.exports = withLess(nextConfig);
