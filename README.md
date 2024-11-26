# rslib-poc

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
        - Sourcemaps for Js & CSS
        - Watch mode
    - Build config
        - DTS generation
        - Js & CSS minification
    - React support
    - SVGR support
- 1 web application project referencing all libraries
    - `components-libs` and `ts-lib` are referenced with [Just-In-Time packages](https://www.shew.dev/monorepos/packaging/jit).
    - `ext-lib` is referenced with the regular `exports`.
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
- CI workflow
    - Build
    - Lint
    - Test
    - Using the new [save](https://github.com/actions/cache/tree/main/save#always-save-cache) and [restore](https://github.com/actions/cache/tree/main/restore) actions
- Storybook

## Learnings

- For library projects, `@types/*` packages including types that are exported by the library should be added to `dependencies` instead of `devDependencies`.
- In development, it's not required to generate the DTS for the workspace library packages. Adding compilation paths to the projects consuming library packages is enough.
- [Just-In-Time Package](https://www.shew.dev/monorepos/packaging/jit) is a great concept but if a library package needs a specific processor, like SVGR for example, it will fail.
- TypeScript [incremental](https://www.typescriptlang.org/tsconfig/#incremental) option combined with [tsBuildInfoFile](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile) allows to use a cache output with Turborepo. For additional information read this [guide](https://www.shew.dev/monorepos/guardrails/typescript).

## Todo

- Add Rspack / Rsbuid to the web-app project
- Switch Storybook to Rspack / Rsbuild
- Add syncpack
