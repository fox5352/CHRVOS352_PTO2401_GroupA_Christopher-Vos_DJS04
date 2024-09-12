const template = document.createElement('template');
template.innerHTML = /*html*/ `
    <style>
        :host {
            -color-force-light: inherit;
        }

        .header__icon {
            width: 1.5rem;
            height: 1.5rem;
            fill: rgba(var(--color-force-light), 1);
        }
        
        .header__button {
            background-color: rgba(var(--color-force-light), 0.1);
            transition: background-color 0.1s;
            border-width: 0;
            border-radius: 6px;
            height: 2.5rem;
            width: 2.5rem;
            cursor: pointer;
            margin-right: 0.25rem;
        }

        .header__button:hover {
            background-color: rgba(var(--color-force-light), 0.2);
        }

        .header__button:active {
            background-color: rgba(var(--color-force-light), 0.3);
        }

    </style>
    <button class="header__button" data-header-search>
        <div class="header__icon"><slot></slot></div>
    </button>
`;

class HeaderButton extends HTMLElement {
    constructor(parameter) {
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define('header-button', HeaderButton);