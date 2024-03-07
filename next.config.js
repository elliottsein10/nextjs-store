/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "variables.sass"`,
    },
};

module.exports = nextConfig