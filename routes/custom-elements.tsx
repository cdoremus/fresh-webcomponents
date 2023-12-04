export default function LitPage() {
  return (
    <div class="">
      <h2>Web Component Custom Elements</h2>
      <div>
        <h3>Greeting Web Component</h3>
        {/* @ts-ignore lit wc */}
        <hello-wc></hello-wc>
      </div>
      <hr />
      <div class="">
        <h2>Accordion Web Component</h2>
        {/* @ts-ignore WC */}
        <web-accordion>
          {/* @ts-ignore WC */}
          <web-accordion-item>
            <h1 slot="title">item no 1</h1>
            <img class="w-full" src="/img/2021.webp" />
            <div>content of item no 1</div>
            {/* @ts-ignore WC */}
          </web-accordion-item>
          {/* @ts-ignore WC */}
          <web-accordion-item>
            <h1 slot="title">item no 2</h1>
            <img class="w-full" src="/img/2011.webp" />
            <div>content of item no 2</div>
            {/* @ts-ignore WC */}
          </web-accordion-item>
          {/* @ts-ignore WC */}
        </web-accordion>
      </div>
    </div>
  );
}
