import * as esbuild from "https://deno.land/x/esbuild@v0.19.2/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

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
