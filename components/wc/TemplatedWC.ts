const template = document.createElement("template");
template!.innerHTML = `
  <div class="container">
    <span id="title">This is inside the template</span>
    <slot></slot>
    <slot name="slot2"></slot>
    <slot name="slot3"></slot>
  </div>
`;

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
    console.log("HERE");
    const shadow = this.attachShadow({ mode: "open" });
    // const template = shadow.querySelector("template");
    // const templateContent = template!.content;
    // console.log("template content", templateContent);
    shadow.innerHTML = `<style>${this.css}</style>`;
    shadow.appendChild(template.content.cloneNode(true));
    // this.innerHTML = template!.content.toString();
  }
}
customElements.define("templated-wc", TemplatedWC);
