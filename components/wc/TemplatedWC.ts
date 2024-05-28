export class TemplatedWC extends HTMLElement {
  css = `
    div.container {
      width: fit-content;
      border: 2px solid blue;
      padding:0.5em;
    }
    #title {
      display:block;
      font-size:2rem;
      font-weight:bold;
    }
    ::slotted(div) {
      color:red;
    }
  `;
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.querySelector("#template-wc");
    shadow.innerHTML = `<style>${this.css}</style>`;
    // @ts-ignore bad error: "content does not exist on type element"
    // shadow.appendChild(template!.content.cloneNode(true));
    shadow.appendChild(template!.content);
    // this.innerHTML = template!.content.toString();
  }
}
customElements.define("templated-wc", TemplatedWC);
