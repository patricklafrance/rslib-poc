# rslib-poc

## Try it out

- `pnpm install`
- `pnpm dev`
- `pnpm build-app`
- `pnpm build-libs`

## What's included?

- 2 library projects using [Rslib](https://lib.rsbuild.dev/).
    - Dev config
        - Sourcemaps for Js & CSS
        - Watch mode
    - Build config
        - DTS generation
        - Js & CSS minification
    - React support
    - SVGR support
- 1 web application project referencing both library projects
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

## Learnings

- For library projects, `@types/*` packages including types that are exported by the library should be added to `dependencies` instead of `devDependencies`.
- In development, it's not required to generate the DTS for the workspace library packages. Adding compilation paths to the projects consuming library packages is enough.
- [Just-In-Time Package](https://www.shew.dev/monorepos/packaging/jit) is a great concept but if a library package needs a specific processor, like SVGR for example, it will fail.
- TypeScript [incremental](https://www.typescriptlang.org/tsconfig/#incremental) option combined with [tsBuildInfoFile](https://www.typescriptlang.org/tsconfig/#tsBuildInfoFile) allows to use a cache output with Turborepo. For additional information read this [guide](https://www.shew.dev/monorepos/guardrails/typescript).

## Todo

- Add CI using Turborepo
- Add Rpack / Rsbuid to the app project
- Add a shared Storybook
- Add syncpack
