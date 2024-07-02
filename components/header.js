export class Header extends HTMLElement {
  /**
   * Creates a new instance of the Header class.
   *
   * @constructor
   */
  constructor() {
    super();
  }
  /**
   * Sets up the element when it is connected to the DOM.
   * Adds the "header" class to the element and sets its innerHTML to a div containing an h1 and a p tag.
   *
   * @return {void} This function does not return anything.
   */
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

