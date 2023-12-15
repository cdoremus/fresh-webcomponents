const template = document.createElement("template");
template.innerHTML = `
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

  </style>
  <div>
    <span id="toggle-state">OFF</span>
    <label id="toggle-label" class="switch">
      <input id="toggle" name="toggle" type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>
`;

class ToggleWC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.append(templateContent);
    const toggleState = this.shadowRoot.querySelector("#toggle-state");
    const label = this.shadowRoot.querySelector("#toggle-label");
    label.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("button clicked!!");
      toggleState.textContent = toggleState.textContent === "OFF"
        ? "ON"
        : "OFF";
      console.log("state", toggleState.textContent);
    });
  }
}

customElements.define("toggle-wc", ToggleWC);

export default ToggleWC;
