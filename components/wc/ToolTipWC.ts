const template = document.createElement("template");
template.innerHTML = `
  <style>
    div.tip-container {
      z-index: 10;
    }
    div.tip {
      background-color: white;
      font-size:0.8rem;
      text-align: center;
      color: red;
      width:200px;
      height:40px;
      position: relative;
      top:-80px;
      left: 250px;
      border: 2px solid black;
      box-shadow: 8px 5px 5px lightgrey;
    }
  </style>
  <div class="tip-container"><div class="tip">This is the tooltip<div></div>
  `;

class ToolTipWC extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const templateClone = template.content.cloneNode(true);
    shadowRoot.append(templateClone);
  }

  connectedCallback() {
    // const tip = document.querySelector("div.tip-container");
    // tip?.parentElement?.addEventListener(
    //   "click",
    //   () => tip.style.display = "block",
    // );
  }
}

customElements.define("tool-tip", ToolTipWC);
