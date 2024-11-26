import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { swcConfig as SwcDevConfig } from "../swc.dev.js";

const storybookConfig: StorybookConfig = {
    framework: "@storybook/react-webpack5",
    core: {
        builder: {
            name: "@storybook/builder-webpack5",
            options: {
                lazyCompilation: true
            }
        }
    },
    swc: SwcDevConfig,
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y"
    ],
    stories: [
        "../../../libs/**/src/**/*.stories.(tsx|mdx)"
    ],
    webpackFinal(config) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.module.rules.find(rule => rule.test.test(".svg")).exclude = /\.svg$/;

        // Configure .svg files to be loaded with @svgr/webpack
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.module.rules.push({
            test: /\.svg$/,
            use: [require.resolve("@svgr/webpack"), require.resolve("url-loader")]
        });

        config.resolve = {
            ...config.resolve,
            plugins: [
                ...(config.resolve?.plugins ?? []),
                new TsconfigPathsPlugin({
                    configFile: "tsconfig.json",
                    extensions: config.resolve?.extensions
                })
            ].filter(Boolean)
        };

        config.plugins = [
            ...(config.plugins ?? []),
            new ReactRefreshWebpackPlugin({
                overlay: {
                    sockIntegration: "whm"
                }
            })
        ];

        return config;
    },
    docs: {
        autodocs: false
    }
};

export default storybookConfig;
