const template = document.createElement("template");
template.innerHTML = /*html*/ `
      <div style="display: flex; flex-direction: column; gap: 20px; font-family: system-ui; justify-content: flex-start;     align-items: center; ">
        <div style="width: 100%">
          <input
              style="width: 98%; padding: 10px; border: 1px solid #222; border-radius: 5px;"
              id="size"
              name="value"
              placeholder="Centímetros"
              type="number"
              min="0"
              />
        </div>
        <div style="font-size: 2rem"> 👇 </div>
        <div style=" font-size: 2rem;" >
          <span style="font-weight: bold;" id="result">0</span>
          <span>Publicaciones</span>
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
    this.shadowRoot.getElementById("result").innerHTML = Intl.NumberFormat(
      "es-ES",
    ).format(result);
  }
}

customElements.define("boo-publication-calculator", PublicationsCalculator);
