import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
import { defineConfig } from "@rslib/core";

export default defineConfig({
    lib: [{
        format: "esm",
        syntax: "esnext",
        dts: false
    }],
    source: {
        entry: {
            index: "./src/index.ts"
        }
    },
    output: {
        target: "web",
        distPath: {
            root: "./dist"
        },
        cleanDistPath: true,
        sourceMap: {
            js: "cheap-module-source-map",
            css: true
        }
    },
    plugins: [pluginReact(), pluginSvgr({
        svgrOptions: {
            exportType: "named"
        }
    })]
});
