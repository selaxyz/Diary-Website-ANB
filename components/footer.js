export class Footer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.classList.add('footer')
        this.innerHTML = `
        <div>
         <p>© All right reserved Bet Sela - 2024</p>
        </div>
        `
    }
}   