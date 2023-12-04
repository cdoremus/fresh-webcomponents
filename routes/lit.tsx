export default function LitPage() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <h2>Lit Web Components</h2>
      <div>
        {/* @ts-ignore lit wc */}
        <my-lit-element></my-lit-element>
      </div>
    </div>
  );
}
