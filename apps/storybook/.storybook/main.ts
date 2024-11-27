// They are installed in this nested project, but not at the root of the workspace.
/* eslint-disable storybook/no-uninstalled-addons */

import type { StorybookConfig } from "storybook-react-rsbuild";

const storybookConfig: StorybookConfig = {
    framework: "storybook-react-rsbuild",
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y"
    ],
    stories: [
        "../../../libs/**/src/**/*.stories.(tsx|mdx)"
    ],
    docs: {
        autodocs: false
    }
};

export default storybookConfig;
