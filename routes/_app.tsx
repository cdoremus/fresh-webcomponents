import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deno Fresh Web Components</title>
        <link rel="stylesheet" href="/styles.css" />
        <script src="/wc/wc.esm.js" type="module"></script>
        <script src="https://fooloomanzoo.github.io/input-picker-pattern/demo/dist/custom-elements-es5-adapter.js">
        </script>
        <script src="https://unpkg.com/two-up-element@1"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
