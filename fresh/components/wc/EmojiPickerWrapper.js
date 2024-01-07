class EmojiPickerWrapper extends HTMLElement {
  connectedCallback() {
    let emoji = "";
    this.innerHTML = `
      <div style="display: flex; gap: 4px; border: 2px solid black; border-radius: 10px; margin: 10px 5px; padding: 5px 10px;">
        <div>
          <emoji-picker></emoji-picker>
        </div>
        <div id="emoji"></div>
      </div>`;
    document.querySelector("emoji-picker")
      .addEventListener("emoji-click", (event) => {
        emoji = event.detail.unicode;
        console.log("Emoji: ", emoji);
        document.getElementById("emoji").innerHTML = `Selected Emoji: ${emoji}`;
      });
  }
}
customElements.define("emoji-picker-wrapper", EmojiPickerWrapper);
