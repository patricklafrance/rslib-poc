import type { KnipConfig } from "knip";

type KnipWorkspaceConfig = NonNullable<KnipConfig["workspaces"]>[string];

type KnipTransformer = (config: KnipWorkspaceConfig) => KnipWorkspaceConfig;

function defineWorkspace({ ignore, ignoreDependencies, ...config }: KnipWorkspaceConfig, transformers?: KnipTransformer[]): KnipWorkspaceConfig {
    let transformedConfig: KnipWorkspaceConfig = {
        ...config,
        ignore: [
            ...(ignore as string[] ?? []),
            "node_modules/**",
            "dist/**"
        ],
        ignoreDependencies: [
            ...(ignoreDependencies as string[] ?? []),
            // Required for Jest.
            "ts-node"
        ]
    };

    if (transformers) {
        transformedConfig = transformers.reduce((acc, transformer) => transformer(acc), transformedConfig);
    }

    return transformedConfig;
}

const rootConfig = defineWorkspace({
});

const ignoreBrowserslist: KnipTransformer = ({ ignoreDependencies, ...config }) => {
    return {
        ...config,
        ignoreDependencies: [
            ...(ignoreDependencies as string[] ?? []),
            // Browserlist isn't supported by plugins.
            "browserslist",
            "@workleap/browserslist-config"
        ]
    };
};

const configureRsbuild: KnipTransformer = config => {
    return {
        ...config,
        rsbuild: {
            config: ["rsbuild.*.ts"]
        }
    };
};

const configureRslib: KnipTransformer = config => {
    return {
        ...config,
        rsbuild: {
            config: ["rslib.*.ts"]
        }
    };
};

const config: KnipConfig = {
    workspaces: {
        ".": rootConfig,
        "apps/storybook": defineWorkspace({}, [ignoreBrowserslist, configureRsbuild]),
        "apps/web-app": defineWorkspace({}, [ignoreBrowserslist, configureRsbuild]),
        "libs/ext-lib": defineWorkspace({}, [configureRslib])
    },
    ignoreWorkspaces: [
    ],
    exclude: [
        // It cause issues with config like Jest "projects".
        "unresolved"
    ],
    ignoreExportsUsedInFile: true
};

export default config;
