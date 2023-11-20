/**
 * Web component to test how it works in Fresh.
 * This needs to be deployed under the static folder and declared in a script tag as such
 *  <script src="/wc/HelloWC.js" type="module"></script>
 *
 * @class HelloWC @extends HTMLElement
 * @classdesc Web component that displays "Hello" with a message followed by "!!"
 * @module HelloWC
 */
class HelloWC extends HTMLElement {
  /** @constructor */
  constructor() {
    super();
    /**
     * @attribute {string} message - the message to be displayed
     * @private
     */
    this.message = this.getAttribute("message");
  }

  /** @method */
  connectedCallback() {
    this.innerHTML = `<div><h2>Hello ${this.message}!!</h2></div>`;
  }
}
customElements.define("hello-wc", HelloWC);

export default HelloWC;
