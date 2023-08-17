const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');
const CracoAntDesignPlugin = require('craco-antd');
const sassResourcesLoader = require('craco-sass-resources-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: path.join(__dirname, 'src/style/AntDesign/customTheme.less'),
            },
        },
        {
            plugin: sassResourcesLoader,
            options: {
                resources: 'src/style/theme.scss',
            },
        },
    ],
    eslint: {
        mode: ESLINT_MODES.file,
    },
    webpack: {
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: path.join(__dirname, 'node_modules/typescript'),
                memoryLimit: 4096,
            }),
        ],
    },
};
