export default function CustomElementsPage() {
  return (
    <div>
      <h2>Web Component Custom Elements</h2>
      <div>
        <h3>Greeting Web Component</h3>
        {/* @ts-ignore WC */}
        <hello-wc></hello-wc>
      </div>
      <hr />
      <div>
        {/* @ts-ignore WC */}
        <toggle-wc></toggle-wc>
      </div>
    </div>
  );
}
