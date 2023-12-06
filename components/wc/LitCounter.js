import { css, html, LitElement } from "https://esm.sh/lit@3.1.0";

export class LitCounter extends LitElement {
  static INITIAL_COUNT = 3;
  static properties = { count: 0 };
  constructor() {
    super();
    this.count = LitCounter.INITIAL_COUNT;
  }

  increment = () => {
    this.count = this.count + 1;
  };

  decrement = () => {
    this.count = this.count - 1;
  };

  render() {
    return html`
      <div class="flex gap-8 py-6">
        <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          @click=${this.decrement}>
          -1
        </button>
        <p class="text-3xl">${this.count}</p>
        <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          @click=${this.increment}>
          +1
        </button>
      </div>
    `;
  }
}

customElements.define(
  "lit-counter",
  LitCounter,
);
