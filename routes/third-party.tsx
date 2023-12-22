export default function ThirdPartyWCPage() {
  return (
    <div>
      <h2>Third-party Web Components</h2>
      <div>
        <h2>Sparkly Text</h2>
        <div style="width:18rem">
          {/* @ts-ignore WC */}
          <sparkly-text
            number-of-sparkles="10"
            style="--sparkly-text-color: yellow"
          >
            <p>This text should sparkle</p>
            {/* @ts-ignore WC */}
          </sparkly-text>
        </div>
      </div>
      <div>
        <h2>Emoji Picker</h2>
        <div>
          {/* @ts-ignore WC */}
          <emoji-picker-wrapper></emoji-picker-wrapper>
        </div>
        <div id="selected-emoji"></div>
      </div>
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
    </div>
  );
}
