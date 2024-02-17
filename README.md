<!-- deno-fmt-ignore-file -->
# Deno Fresh Web Components Demo

This repo demos the use of native Web Components with [Deno Fresh](https://fresh.deno.dev).

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Start the project:

```
deno task dev
```

The `dev` task runs a build that uses `esbuild` to convert the TypeScript files to JavaScript and bundles all files in `components/wc` into a `wc.esm.js` file in the `static/wc` folder and then starts the Fresh server.

When you update files in `components/wc`, you need to stop the server and run ```deno task dev``` again to rebuild the web component files.
