// @deno-types="https://unpkg.com/lit-html@3.1.0/lit-html.d.ts"
// import { html } from "https://unpkg.com/lit-html@3.1.0/lit-html.js";
// @deno-types="https://unpkg.com/lit-element@3.1.0/lit-element.d.ts"
// import { LitElement } from "https://unpkg.com/lit-element@3.1.0/lit-element.js";

import { html, LitElement } from "https://esm.sh/lit@3.1.0";
// } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class MyLitElement extends LitElement {
  version = "STARTING";
  constructor() {
    super();
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}

customElements.define(
  "my-lit-element",
  MyLitElement as unknown as CustomElementConstructor,
);
