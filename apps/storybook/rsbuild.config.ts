import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
    dev: {
        lazyCompilation: true
    },
    output: {
        target: "web",
        sourceMap: {
            js: "cheap-module-source-map",
            css: true
        },
        polyfill: "entry"
    },
    plugins: [pluginReact(), pluginSvgr({
        svgrOptions: {
            exportType: "named"
        }
    })]
});
