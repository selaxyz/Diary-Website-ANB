export class Footer extends HTMLElement{
/**
 * Initializes a new instance of the class.
 *
 * @constructor
 * @return {void}
 */
    constructor(){
        super()
    }
/**
 * Initializes the component and sets the class and innerHTML.
 *
 * @return {void}
 */
    connectedCallback(){
        this.classList.add('footer')
        this.innerHTML = `
        <div>
         <p>© All right reserved Bet Sela - 2024</p>
        </div>
        `
    }
}   