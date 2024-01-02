export default function LitPage() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div>
        <div class="text-3xl font-bold">Lit Web Components</div>
        <div>
          <h2>Greeting Component</h2>
          {/* @ts-ignore lit wc */}
          <my-lit-element></my-lit-element>
        </div>
      </div>
      <div>
        <h2>Custom Alert Web Component</h2>
        {/* @ts-ignore lit wc */}
        <custom-alert>This is a dismissable message</custom-alert>
      </div>
    </div>
  );
}
