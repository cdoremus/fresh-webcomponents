import { css, html, LitElement } from "https://esm.sh/lit@3.1.0";

export class MyLitMessage extends LitElement {
  // Needed for TypeScript since it does not recognize TS properties
  //   as class-level variables
  message = "";
  // Properties are the component attributes
  static get properties() {
    return {
      message: { type: String, state: false },
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
    <p>The message:
      <span class="message">${this.message}</span>
    </p>
    `;
  }
}

customElements.define(
  "my-lit-message",
  MyLitMessage as unknown as CustomElementConstructor,
);
