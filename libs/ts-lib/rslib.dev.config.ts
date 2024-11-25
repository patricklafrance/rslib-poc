import { defineConfig } from "@rslib/core";

export default defineConfig({
    lib: [{
        format: "esm",
        syntax: "esnext",
        // bundle: true,
        // dts: {
        //     bundle: true
        // }
    }],
    source: {
        entry: {
            index: "./src/index.ts"
        }
        // exclude: [
        //     path.resolve(__dirname, "rslib.build.config.ts")
        // ]
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
