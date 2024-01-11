/**
 * Tool tip web component that holds the tip text in
 * the 'tip' attribute and surrounds that text that will
 * be linked to the tip.
 *
 * @class ToolTipWC @extends HTMLElement
 * @classdesc Tool Tip web component
 */
const template = document.createElement("template");
template.innerHTML = `
  <style>
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
      visibility: hidden;
      width: 200px;
      font-size: 1.0rem;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;

      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      bottom: 100%;
      left: 50%;
  }
    .tooltip:hover .tooltiptext {
      visibility: visible;
  }
    </style>
  <div class="tooltip"><slot></slot><span class="tooltiptext"></span></div>
  `;

class ToolTipWC extends HTMLElement {
  /**  @constructor */
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const templateClone = template.content.cloneNode(true);
    shadowRoot.append(templateClone);
    /**
     * @attribute {string} tip - Holds the tool tip text
     * @private
     */
    const tip = this.getAttribute("tip");
    // console.log("Tip content", tip);
    const text = shadowRoot.querySelector(".tooltiptext");
    text!.textContent = tip;
  }
}

customElements.define("tool-tip", ToolTipWC);
