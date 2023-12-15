export default function ThirdPartyWCPage() {
  return (
    <div>
      <h2>Third-party Web Components</h2>
      <div class="w-2/4">
        <h2>Split Window Component</h2>
        <div class="w-2/4">
          {/* @ts-ignore WC */}
          <two-up>
            <div>
              <img src="/img/2021.webp" style="height:200px; width:500px;" />
            </div>
            <div>
              <img src="/img/2011.webp" style="height:200px; width:500px;" />
            </div>
            {/* @ts-ignore WC */}
          </two-up>
        </div>
      </div>
      <h2>Material UI Checkbox</h2>
      <div>
        {/* @ts-ignore WC */}
        {/* <md-checkbox checked></md-checkbox> */}
      </div>
    </div>
  );
}
