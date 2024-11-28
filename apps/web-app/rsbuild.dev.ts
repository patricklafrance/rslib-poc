import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
    mode: "development",
    dev: {
        hmr: true,
        lazyCompilation: true,
        liveReload: true
    },
    server: {
        host: "localhost",
        port: 8080
    },
    source: {
        entry: {
            index: "./src/index.tsx"
        },
        define: {
            "process.env": {
                "RenderRandomNumber": JSON.stringify(true)
            }
        }
    },
    output: {
        target: "web",
        // Similar to webpack.publicPath.
        assetPrefix: "auto",
        minify: false,
        sourceMap: {
            js: "cheap-module-source-map",
            css: true
        },
        polyfill: "entry"
    },
    html: {
        template: "./public/index.html"
    },
    plugins: [pluginReact(), pluginSvgr({
        svgrOptions: {
            exportType: "named"
        }
    })]
});
