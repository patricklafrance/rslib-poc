# rslib-poc

POC to tryout Rslib, Rsbuild and Turborepo

## Try it out

- `pnpm install`
- `pnpm dev`
- `pnpm storybook`
- `pnpm build-apps`
- `pnpm build-libs`
- `pnpm serve-web-app`
- `pnpm serve-storybook`

## What's included?

- 1 library project using [Rslib](https://lib.rsbuild.dev/).
    - Dev config
        - Sourcemaps for JS & CSS
        - Watch mode
    - Build config
        - DTS generation
        - JS & CSS minification
    - React support
    - SVGR support
- 2 library projects bundled as [Just-In-Time packages](https://www.shew.dev/monorepos/packaging/jit)
- 1 web app using [Rsbuild](https://rsbuild.dev/)
    - Dev config
        - HMR
        - Live reload
        - Lazy compilation
        - Cheap Source maps
    - Build config
        - Minification
        - Source maps
    - Browserslist support
    - React support
    - SVGR support
- 1 storybook app using [Rsbuild](https://rsbuild.dev/)
- Turbo repo 2
    - Interactive terminal
    - Dev task
    - Build task
    - Lint task
        - ESLint
        - tsc
        - Includes linting the root of the workspace
    - Test task
        - Running Jest
- ESLint
- Syncpack
- Knip
- CI workflow
    - Build
    - Lint
    - Test
    - Using the new [save](https://github.com/actions/cache/tree/main/save#always-save-cache) and [restore](https://github.com/actions/cache/tree/main/restore) actions

## Learnings

- For library projects, `@types/*` packages including types that are exported by the library should be added to `dependencies` instead of `devDependencies`.
- In development, it's not required to generate the DTS for the workspace library packages. Adding compilation paths to the projects consuming library packages is enough.
- For [Just-In-Time Package](https://www.shew.dev/monorepos/packaging/jit) to work, the host application bundler has to handle every specific processor required by the packages.
- TypeScript [incremental](https://www.typescriptlang.org/tsconfig/#incremental) option combined with [tsBuildInfoFile](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile) allows to use a cache output with Turborepo. For additional information read this [guide](https://www.shew.dev/monorepos/guardrails/typescript).

## Todo

- Add Hopper / Orbiter
