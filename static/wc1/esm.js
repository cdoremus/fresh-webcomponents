// deno-lint-ignore-file

// components/wc/CounterWC.ts
var CounterWC = class extends HTMLElement {
  buttons;
  counterCount;
  /** @constructor */
  constructor() {
    super();
    this.buttons = this.querySelectorAll("button");
    this.counterCount = this.querySelector("#counter-count");
  }
  /** @method */
  connectedCallback() {
    for (const button of this.buttons) {
      button.addEventListener("click", () => {
        const countHTML = parseInt(this.counterCount.innerHTML);
        this.counterCount.innerHTML = (countHTML + parseInt(button.innerHTML)).toString();
      });
    }
  }
};
customElements.define("counter-wc", CounterWC);

// components/wc/HelloWC.ts
var HelloWC = class extends HTMLElement {
  message;
  /** @constructor */
  constructor() {
    super();
    this.message = this.getAttribute("message");
  }
  /** @method */
  connectedCallback() {
    this.innerHTML = `<div style="border: 2px solid black; border-radius: 10px; margin: 10px 5px; padding: 5px 10px;">
        <h4>Hello ${this.message}!!</h4>
      </div>`;
  }
};
customElements.define("hello-wc", HelloWC);
