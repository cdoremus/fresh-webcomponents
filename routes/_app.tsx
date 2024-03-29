import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deno Fresh Web Components</title>
        <link rel="stylesheet" href="/styles.css" />
        <script src="/wc/wc.esm.js" type="module"></script>
        <script type="module" src="https://esm.sh/@stefanjudis/sparkly-text">
        </script>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/emoji-picker-element@^1/index.js"
        >
        </script>
        <script src="https://unpkg.com/two-up-element@1" type="module"></script>
      </head>
      <body class="bg-blue-400">
        <header>
          <div class="title">
            Fresh Web Component Demo
          </div>
          <div class="fresh-logo">
            <img
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
          </div>
          <nav>
            <a
              href="/custom-elements"
              class="text-indigo-700 hover:text-cyan-600"
            >
              Custom Elements
            </a>
            <a href="/lit" class="text-indigo-700 hover:text-cyan-600">
              Lit Components
            </a>
            <a href="/third-party" class="text-indigo-700 hover:text-cyan-600">
              Third-party Components
            </a>
            <a href="/" class="text-indigo-700 hover:text-cyan-600">Home</a>
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
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
