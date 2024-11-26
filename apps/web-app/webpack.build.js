// @ts-check

import { defineBuildConfig, findModuleRule, matchTest } from "@workleap/webpack-configs";
import { createRequire } from "node:module";
import { swcConfig } from "./swc.dev.js";

const require = createRequire(import.meta.url);

/**
 * @type {import("@workleap/webpack-configs").WebpackConfigTransformer}
 */
function fixSvgr(config) {
    const rule = findModuleRule(config, matchTest(/\.svg$/i));

    // @ts-ignore
    rule.moduleRule.loader = undefined;

    // The "url-loader" is required to enable syntax such as "import { ReactComponent as WorkleapLogo } from "./workleap.svg";".
    // @ts-ignore
    rule.moduleRule.use = [require.resolve("@svgr/webpack"), require.resolve("url-loader")];

    return config;
}

export default defineBuildConfig(swcConfig, {
    transformers: [fixSvgr]
});
