class EmojiPickerWrapper extends HTMLElement {
  connectedCallback() {
    let emoji = "";
    this.innerHTML = `
      <div>
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
