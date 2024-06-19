const template = document.createElement("template");
template.innerHTML = /*html*/ `
      <div style="display: flex; flex-direction: row; gap: 20px; font-family: system-ui; justify-content: flex-start;     align-items: center; ">
      <div>
      <input
          style="padding: 10px; border: 1px solid #222; border-radius: 5px;"
          id="size"
          name="value"
          placeholder="Add size (cm)"
          type="number"
          min="0"
          />
          cm
          </div>
      <div style="font-size: 2rem">
      👉
      </div>
      <div style="font-weight: bold">
      <span id="result">0</span>
      <span>pubs.</span>
      </div>
      </div>
`;

class PublicationsCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("size").addEventListener(
      "keyup",
      (event) => this.calculate(event),
    );
    this.shadowRoot.getElementById("size").addEventListener(
      "change",
      (event) => this.calculate(event),
    );
  }

  calculate($event) {
    console.log("calculate... ", $event.target.value);
    // 2,5 --> 300 pub.
    const value = $event.target?.value ?? 0;
    const result = value ? value * 300 / 2.5 : 0;
    this.shadowRoot.getElementById("result").innerHTML = result;
  }
}

customElements.define("boo-publication-calculator", PublicationsCalculator);
