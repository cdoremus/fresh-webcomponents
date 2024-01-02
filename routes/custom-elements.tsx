export default function CustomElementsPage() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="text-3xl font-bold">Web Component Custom Elements</div>
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
