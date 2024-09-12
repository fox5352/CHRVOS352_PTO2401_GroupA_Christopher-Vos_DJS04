const template = document.createElement('template');
template.innerHTML = /*html*/ `
    <style>
        .overlay {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            border-width: 0;
            box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
            animation-name: enter;
            animation-duration: 0.6s;
            z-index: 10;
            background-color: rgba(var(--color-light), 1);
        }

        @media (min-width: 30rem) {
            .overlay {
                max-width: 30rem;
                left: 0%;
                top: 0;
                border-radius: 8px;;
            }
        }        
    </style>
    <dialog class="overlay">
        <slot></slot>

        <slot name="button-row">
        </slot>
    </dialog>
`

class OverlayModel extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.dialog = null;
    }
    static get observedAttributes() {
        return ['open'];
    }

    connectedCallback() {
        this.dialog = this.shadowRoot.querySelector('dialog')

        this.updatedAttributes();
    }
    
    disconnectedCallback() {
        this.dialog = null;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name);
        
        if (oldValue !== newValue) {
            this.updatedAttributes(); // Call the function when attribute changes
        }
    }

    updatedAttributes() {
        const attributes = this.attributes;
        
        if (this.dialog && attributes.open != undefined && attributes.open !== "true") {
            this.dialog.open = true;
        }else {
            this.dialog.open = false;
        }
    }
}

customElements.define("overlay-model", OverlayModel);