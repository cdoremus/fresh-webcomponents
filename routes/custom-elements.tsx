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
        <h2>ToolTip</h2>
        <div>
          This is some{" "}
          <div style="display:inline">
            Tip
            <tool-tip></tool-tip>
          </div>
        </div>
      </div>
    </div>
  );
}
