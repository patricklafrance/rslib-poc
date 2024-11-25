# rslib-poc

## Try it out

- `pnpm install`
- `pnpm dev`
- `pnpm build-app`
- `pnpm build-libs`

## Learnings

- For libraries, `@types/*` packages including types that are exported by the library should be added to `dependencies` instead of `devDependencies`.

- In development, it's not required to generate the DTS for the workspace library packages. Adding compilation paths to the projects consuming library packages is enough.

- [Just-In-Time Package](https://www.shew.dev/monorepos/packaging/jit) is a great concept but if a library package needs a specific processor, like SVGR for example, it will fail.

## Todo

- Add syncpack
