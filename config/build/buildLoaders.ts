import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    /* const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }; */

    const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true });

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        /* typescriptLoader, */
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
