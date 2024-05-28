export type TableDataItem = {
  id: number;
  name: string;
  email: string;
};

class MyTable extends HTMLElement {
  css = `
    table {
      border: 4px solid black;
      min-width: 400px;
    }
    th, td {
      border: 3px solid black;
      text-align: center;
    }
    div {
      font-size:2rem;
      font-weight:900;
    }
  `;
  constructor() {
    super();
  }

  connectedCallback() {
    const json = this.getAttribute("data-feed") ?? "[]";
    const data: [TableDataItem] = JSON.parse(json);
    const shadowRoot = this.attachShadow({ mode: "open" });
    let html = `<style>${this.css}</style>`;
    if (data.length > 0) {
      html = html + this.displayData(data);
    } else {
      html = html + `<div>There was a problem fetching the user data</div>`;
    }
    shadowRoot.innerHTML = html;
  }

  displayData(data: [TableDataItem]) {
    return `
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
customElements.define("data-table", MyTable);
