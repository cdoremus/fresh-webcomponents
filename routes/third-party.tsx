export default function ThirdPartyWCPage() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="text-4xl font-bold">Third-party Web Components</div>
      <hr />
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
      <div class="w-2/4">
        <h2>Split Window Component</h2>
        <div>
          {/* @ts-ignore WC */}
          <two-up>
            <div style="height: auto">
              <img src="/img/2021.webp" />
            </div>
            <div style="height: auto">
              <img src="/img/2011.webp" />
            </div>
            {/* @ts-ignore WC */}
          </two-up>
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
    </div>
  );
}
