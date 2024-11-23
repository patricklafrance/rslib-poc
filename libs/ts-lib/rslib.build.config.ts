import { defineConfig } from "@rslib/core";

// import path from "node:path";
// import { fileURLToPath } from "node:url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default defineConfig({
    lib: [{
        format: "esm",
        syntax: "esnext",
        bundle: true,
        dts: {
            bundle: true
        }
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
        minify: true
    },
});
