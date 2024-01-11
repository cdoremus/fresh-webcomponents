import { css, html, LitElement } from "https://esm.sh/lit@3.1.0";
// import {
//   customElement,
//   property,
// } from "https://esm.sh/lit@3.1.0/decorators.js";

/* TS errors are ignored in the build */
// @customElement("my-lit-element")
export class MyLitElement extends LitElement {
  // @property()
  static get properties() {
    return {
      version: "",
    };
  }
  // version = "";
  static get styles() {
    return css`.title {color:red}`;
  }
  constructor() {
    super();
    this.version = "Starting List";
  }

  render() {
    return html`
    <p class="title">Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}

customElements.define(
  "my-lit-element",
  MyLitElement as unknown as CustomElementConstructor,
);
