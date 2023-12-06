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
        <script src="https://unpkg.com/two-up-element@1"></script>
        {
          /* <script
          type="module"
          src="https://unpkg.com/web-accordion/dist/web-accordion/web-accordion.esm.js"
        >
        </script> */
        }
      </head>
      {/* <body class="m-x-5 md:m-x-50 m-y-0 pt-4 mx-auto max-w-screen-lg bg-blue-100"> */}
      <body class="bg-blue-100">
        <header class="bg-green-500 p-4 flex items-center justify-center bg-blue-100">
          <div class="font-bold text-4xl">
            Fresh Web Component Demo
          </div>
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <nav class="flex flex-col border-2 border-solid border-black ml-1.5">
            <a href="/custom-elements" class="">Custom Elements</a>
            <a href="/lit" class="">Lit Components</a>
            <a href="/third-party" class="">Third-party Components</a>
            <a href="/" class="">Home</a>
          </nav>
        </header>
        <main>
          <Component />
        </main>
        <footer>
          <a href="https://github.com/cdoremus/deno-fresh-webcomponents">
            <span class="source-text">Source Code</span>
          </a>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
