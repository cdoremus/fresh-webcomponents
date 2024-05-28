import * as esbuild from "npm:esbuild@0.21.3";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.10.3";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./components/wc/mod.ts"],
  outfile: "./static/wc/wc.esm.js",
  bundle: true,
  minify: false,
  banner: { js: "// deno-lint-ignore-file" },
  format: "esm",
});

// console.log(result.outputFiles);

esbuild.stop();
