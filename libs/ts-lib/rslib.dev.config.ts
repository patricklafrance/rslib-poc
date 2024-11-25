import { defineConfig } from "@rslib/core";

export default defineConfig({
    lib: [{
        format: "esm",
        syntax: "esnext"
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
    }
});
