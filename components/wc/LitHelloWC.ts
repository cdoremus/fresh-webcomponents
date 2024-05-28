/* This class does not work properly with Fresh at this point (June, 2024),
 * This code is here as a simple Lit decorator example to use once browsers
 * or Deno supports transpiling decorators to browser-compatible JavaScript.
 *
 * To use this on a Fresh page, make sure this file is exported in the main.ts
 *  file and that it is referenced in the lit.tsx route file (uncomment
 *  the commented code).
*/

import { html, LitElement } from "npm:lit";
import { customElement, property } from "npm:lit/decorators.js";

@customElement("hello-world")
export class HelloWorld extends LitElement {
  @property()
  name?: string = "world";

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}
