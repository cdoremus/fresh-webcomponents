/**
 * How to use a library in a web component - change-case here.
 */
// 'npm:' specifier does not work since Deno is not processing this file
import * as changeCase from "https://esm.sh/change-case@5.4.3";

class UsingNpmLib extends HTMLElement {
  connectedCallback() {
    // attribute is optional
    this.token = this.getAttribute("token") ?? "";
    this.innerHTML = `
      <h4>Casing a String using npm library change-case via esm.sh</h4>
      <input type="text" value="${this.token}" placeholder="Enter something"/>
      <h5>Original Case: <span class="token">${this.token}<span></h5>
      <div>Camel Case: <span class="camel">${
      changeCase.camelCase(this.token)
    }</span></div>
      <div>Kebab Case: <span class="kebab">${
      changeCase.kebabCase(this.token)
    }</span></div>
      <div>Pascal Case: <span class="pascal">${
      changeCase.pascalCase(this.token)
    }</span></div>
      <div>Snake Case: <span class="snake">${
      changeCase.snakeCase(this.token)
    }</span></div>
    `;
    this.querySelector("input").addEventListener("change", (e) => {
      this.renderChanges(e.target.value);
    });
  }

  renderChanges(change) {
    console.log("change: ", change);
    const spanNodes = this.querySelectorAll("span");
    const spans = Array.from(spanNodes);
    for (const span of spans) {
      const className = span.className;
      if (className) {
        const el = this.querySelector(`span.${className}`);
        // Don't want readers to get lost in the details, so simplicity prevails
        switch (className) {
          case "token":
            el.innerHTML = change;
            break;
          case "camel":
            el.innerHTML = changeCase.camelCase(change);
            break;
          case "kebab":
            el.innerHTML = changeCase.kebabCase(change);
            break;
          case "pascal":
            el.innerHTML = changeCase.pascalCase(change);
            break;
          case "snake":
            el.innerHTML = changeCase.snakeCase(change);
            break;
        }
      }
    }
  }
}

customElements.define("using-npm-lib", UsingNpmLib);
