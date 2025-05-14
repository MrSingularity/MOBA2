class CustomNavigationBar extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                .navibar {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: #ccabff;
                    padding: 10px 0;
                    width: 100%;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                }

                ::slotted(a) {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }

                ::slotted(a img) {
                    width: 24px;
                    height: 24px;
                    object-fit: contain;
                    aspect-ratio: 1 / 1;
                    clip-path: inset(10% 10% 10% 10%);
                    opacity: 0.5;
                    transition: opacity 0.3s, transform 0.2s;
                }

                ::slotted(a:hover img) {
                    opacity: 1;
                    transform: scale(1.1);
                }

                @media (max-width: 600px) {
                    ::slotted(a img) {
                        width: 20px;
                        height: 20px;
                    }
                }

                @media (min-width: 1200px) {
                    ::slotted(a img) {
                        width: 28px;
                        height: 28px;
                    }
                }
            </style>
            <div class="navibar">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('navigation-bar', CustomNavigationBar);
