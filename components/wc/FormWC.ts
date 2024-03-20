/** Example of a web component that contains a form
 * to be processed by a Fresh handler (see routes/form-processing.ts).
 */
class FormWC extends HTMLElement {
  css = `
    form {
      width:fit-content;
      border:3px solid black;
    }
    input {
      width:30%;
    }
  `;
  connectedCallback() {
    this.innerHTML = `
    <style>${this.css}</style>
    <form id="search-form" method="GET" action="/form-processor">
      <label for="search">
        Enter Something:
        <input type="text" id="search" name="search"/>
      </label>
      <button form="search-form" class="border-black bg-slate-400 px-1 drop-shadow-lg">Click Here</button>
    </form>
    `;
  }
}
customElements.define("search-form", FormWC);
