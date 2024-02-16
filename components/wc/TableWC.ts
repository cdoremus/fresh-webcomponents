export type TableDataItem = {
  id: number;
  name: string;
  email: string;
};

class MYTable extends HTMLElement {
  css = `
    table {
      border: 4px solid black;
      min-width: 400px;
    }
    th, td {
      border: 3px solid black;
      text-align: center;
    }
  `;
  constructor() {
    super();
  }

  connectedCallback() {
    const json = this.getAttribute("data-feed") ?? "[]";
    const data: [TableDataItem] = JSON.parse(json);
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>${this.css}</style>
    <table>
      <thead><th>ID</th><th>Name</th><th>Email</th></thead>
      <tbody>
      ${
      data.map((item) =>
        `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td></tr>`
      )
    }
      </tbody>
    </table>
    `;
  }
}
customElements.define("data-table", MYTable);
