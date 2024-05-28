export default function LitPage() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="text-4xl font-bold">Lit Web Components</div>
      <hr />
      <div>
        <h2>Greeting Component</h2>
        <my-lit-message message="Greetings from a custom element!">
        </my-lit-message>
      </div>
      <div>
        <h2>Custom Alert Web Component</h2>
        <custom-alert>This is a dismissible message</custom-alert>
      </div>
      {
        /* <div>
        <h2>Lit Hello World Using Decorators</h2>
        <hello-world></hello-world>
      </div> */
      }
    </div>
  );
}
