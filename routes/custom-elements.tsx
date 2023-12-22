export default function CustomElementsPage() {
  return (
    <div>
      <h2>Web Component Custom Elements</h2>
      <div>
        <h3>Greeting Web Component</h3>
        <hello-wc></hello-wc>
      </div>
      <hr />
      <div>
        <h2>Tool Tip Demo</h2>
        <div>
          <span class="text-xl bold">Hover over this:</span>{" "}
          <tool-tip tip="The tooltip text">Text that needs a tooltip</tool-tip>
        </div>
      </div>
    </div>
  );
}
