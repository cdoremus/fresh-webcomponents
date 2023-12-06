export default function ThirdPartyWCPage() {
  return (
    <div>
      <h2>Third-party Web Components</h2>
      <div class="">
        <h2>Accordion Web Component</h2>
        {/* @ts-ignore WC */}
        {/* <web-accordion> */}
        {/* @ts-ignore WC */}
        {
          /* <web-accordion-item>
            <h3 slot="title">Introduction to Fresh</h3>
            <div>
              <div class="markdown-body mb-8">
                <p>
                  Fresh is a full stack modern web framework for JavaScript and
                  TypeScript developers, designed to make it trivial to create
                  high-quality, performant, and personalized web applications.
                  You can use it to create your home page, a blog, a large web
                  application like GitHub or Twitter, or anything else you can
                  think of.
                </p>
                <p>
                  At its core, Fresh is a combination of a routing framework and
                  templating engine that renders pages on demand, on the server.
                  In addition to this just-in-time (JIT) rendering on the
                  server, Fresh also provides an interface for seamlessly
                  rendering some components on the client for maximum
                  interactivity. The framework uses{" "}
                  <a href="https://preactjs.com" rel="noopener noreferrer">
                    Preact
                  </a>{" "}
                  and JSX for rendering and templating on both the server and
                  the client.
                </p>
                <p>
                  Fresh also does not have a build step. The code you write is
                  also directly the code that is run on the server, and the code
                  that is executed on the client. Any necessary transpilation of
                  TypeScript or JSX to plain JavaScript is done on the fly, just
                  when it is needed. This allows for insanely fast iteration
                  loops and very very fast deployments.
                </p>
                <p>
                  Fresh projects can be deployed manually to any platform with
                  {" "}
                  <code>deno</code>, but it is intended to be deployed to an
                  edge runtime like{" "}
                  <a href="https://deno.com/deploy" rel="noopener noreferrer">
                    Deno Deploy
                  </a>{" "}
                  for the best experience.
                </p>
                <p>Some stand out features:</p>
                <ul>
                  <li>No build step</li>
                  <li>Zero config necessary</li>
                  <li>JIT rendering on the edge</li>
                  <li>
                    Tiny &amp; fast (no client JS is required by the framework)
                  </li>
                  <li>
                    Optional client side hydration of individual components
                  </li>
                  <li>
                    Highly resilient because of progressive enhancement and use
                    of native browser features
                  </li>
                  <li>TypeScript out of the box</li>
                  <li>File-system routing à la Next.js</li>
                </ul>
              </div>
            </div>
          </web-accordion-item> */
        }

        {
          /* <web-accordion-item>
            <h3 slot="title">Fresh Architecture</h3>
            <div class="bg-slate-100">
              <div class="markdown-body mb-8">
                <p>
                  Fresh is designed to make it easy to build fast, scalable, and
                  reliable applications. To do this, it makes opinionated
                  decisions about how one should build web applications. These
                  decisions are backed by strong empirical data gathered from
                  experts in the field. Some examples of these principles are:
                </p>
                <ul>
                  <li>Page load times should be reduced to a minimum.</li>
                  <li>The work performed on the client should be minimized.</li>
                  <li>
                    Errors should have a small blast radius - stuff should
                    gracefully degrade.
                  </li>
                </ul>
                <p>
                  The single biggest architecture decision that Fresh makes is
                  its usage of the
                  <a
                    href="https://www.patterns.dev/posts/islands-architecture/"
                    rel="noopener noreferrer"
                  >
                    islands architecture
                  </a>{" "}
                  pattern. This means that Fresh applications ship pure HTML to
                  the client by default. Parts of a server-rendered page can
                  then be independently re-hydrated with interactive widgets
                  (islands). This means that the client is only responsible for
                  rendering parts of the page that are interactive enough to
                  warrant the extra effort. Any content that is purely static
                  does not have related client-side JavaScript and is thus very
                  lightweight.
                </p>
              </div>
            </div>
          </web-accordion-item>
        </web-accordion> */
        }
      </div>
      <hr />
      <div class="">
        <h2>Split Window Component</h2>
        <div class="flex justify-center w-full">
          {/* @ts-ignore WC */}
          <two-up>
            <div>
              <img src="/img/2021.webp" />
            </div>
            <div>
              <img src="/img/2011.webp" />
            </div>
            {/* @ts-ignore WC */}
          </two-up>
        </div>
      </div>
    </div>
  );
}
