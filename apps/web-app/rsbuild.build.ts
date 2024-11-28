import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
    mode: "production",
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
        distPath: {
            root: "./dist"
        },
        cleanDistPath: true,
        // Similar to webpack.publicPath.
        assetPrefix: "http://localhost:8080/",
        // Not compatible with Netlify atomic deployment.
        // Note: Validate if it's OK for assets, with weback, we have: assetModuleFilename: "[name][ext][query]".
        filenameHash: false,
        minify: true,
        sourceMap: {
            js: "source-map",
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
