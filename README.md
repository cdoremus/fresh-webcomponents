# Deno Web Components Demo

This repo demos the use of Web Components with [Deno](https://deno.com). It
serves all components using [Deno Fresh](https://fresh.deno.dev).

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Start the project:

```
deno task dev
```

The `dev` task runs a build that uses esbuild to convert the TypeScript files to
JavaScript and bundles them into a `wc.esm.js` file in the `static/wc` folder
and then starts the Fresh server.
