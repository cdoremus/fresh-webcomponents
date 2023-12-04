import { css, html, LitElement } from "https://esm.sh/lit@3.1.0";

// @customElement("my-lit-element")
// @ts-ignore WWC
export class MyLitElement extends LitElement {
  // @property()
  static properties = { version: "" };
  version = "";
  #styles = css`color:red`;
  constructor() {
    super();
    this.version = "Starting List";
  }

  render() {
    return html`
    <p style={this.styles}>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}

customElements.define(
  "my-lit-element",
  MyLitElement as unknown as CustomElementConstructor,
);
