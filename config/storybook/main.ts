import { RuleSetRule, Configuration, DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        config!.module!.rules!.push(buildCssLoader(true));

        // @ts-ignore
        config!.module!.rules = config!.module!.rules!.map((rule) => {
            const typedRule = rule as RuleSetRule;
            if (/svg/.test(typedRule.test as string)) {
                return { ...typedRule, exclude: /\.svg$/i };
            }

            return typedRule;
        });
        config!.module!.rules!.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.com'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );

        return config;
    },
};
