export class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.classList.add("header")
    this.innerHTML = `
        <div>
            <h1>Diary Application</h1>
            <p>Make Every Journey Count.</p>
        </div>
    `
  }
}

