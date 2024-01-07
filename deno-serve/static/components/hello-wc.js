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
  message;
  /** @constructor */
  constructor() {
    super();
    /**
     * @attribute {string} message - the message to be displayed. The message
     * 'World' is the default if no message attribute is set.
     * @private
     */
    this.message = this.getAttribute("message") ?? "World";
  }

  /** @method */
  connectedCallback() {
    this.innerHTML =
      `<div style="border: 2px solid black; border-radius: 10px; margin: 10px 5px; padding: 5px 10px;">
        <h4>Hello ${this.message}!!</h4>
      </div>`;
  }
}
customElements.define("hello-wc", HelloWC);

export default HelloWC;
