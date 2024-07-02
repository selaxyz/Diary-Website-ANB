export class Modal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div popover id="delete-all" class="diary-confirm-delete-modal">
        <div class="diary-confirm-delete-modal-close">
          <button popovertarget="delete-all" popovertargetaction="hide">
            <img src="../assets/icons/close.svg" />
          </button>
        </div>
        <div class="diary-confirm-delete-modal-header">
          <h2>Confirm to delete</h2>
        </div>
        <hr />
        <div class="diary-confirm-modal-content">
          <img src="./assets/images/wait.png" />
          <p>Are you sure you want to delete everything?</p>
        </div>
        <hr />
        <div class="diary-confirm-delete-modal-action">
          <button popovertarget="delete-all" onclick="{clearAll() ; displayManual()}" popovertargetaction="hide">Delete</button>
          <button popovertarget="delete-all" popovertargetaction="hide">
            Cancel
          </button>
        </div>
      </div>

        `
    }
}
