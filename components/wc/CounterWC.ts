/**
 * A Counter web component to test how it works in Fresh.
 * This needs to be deployed under the static folder and declared in a script tag as such
 *  <script src="/wc/CounterWC.js" type="module"></script>
 *
 * @class CounterWC @extends HTMLElement
 * @classdesc Counter written as a web component"
 * @module CounterWC
 */
class CounterWC extends HTMLElement {
  buttons: NodeListOf<HTMLButtonElement>;
  counterCount: HTMLElement;
  /** @constructor */
  constructor() {
    super();
    /**
     * @attribute {NodeListOf<HTMLButtonElement>} buttons - the increment/decrement buttons
     * @private
     */
    this.buttons = this.querySelectorAll("button");
    /**
     * @attribute {HTMLElement} counter-count - Holds the current count value
     * @private
     */
    this.counterCount = this.querySelector("#counter-count") as HTMLElement;
  }

  /** @method */
  connectedCallback() {
    for (const button of this.buttons) {
      button.addEventListener("click", () => {
        const countHTML = parseInt(this.counterCount.innerHTML);
        this.counterCount.innerHTML = (countHTML as number +
          parseInt(button.innerHTML)).toString();
      });
    }
  }
}
customElements.define("counter-wc", CounterWC);

export default CounterWC;
