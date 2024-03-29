import { css, html, LitElement } from "https://esm.sh/lit@3.1.0";

// @ts-ignore LSP does not recognize LitElement syntax
export class MyLitMessage extends LitElement {
  // Properties are the component attributes
  static get properties(): { message: string } {
    return {
      message: "",
    };
  }
  static get styles() {
    return [
      css`p {font-weight: bold }`,
      css`.message {color:red}`,
    ];
  }
  constructor() {
    super();
  }

  render() {
    return html`
    <p>The message: <span class="message">${this.message}</span></p>
    `;
  }
}

customElements.define(
  "my-lit-message",
  MyLitMessage as unknown as CustomElementConstructor,
);
