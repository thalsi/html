class MyBox extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({
      mode: 'open',
    });

    shadow.innerHTML = `
        <style>
      .box {
      border: 2px solid blue;
      padding: 10px;
    }
    ::slotted([slot="header"]) {
      color: blue;
    }
      </style>
      <div class="box">
      <slot name="header" class="color"></slot>
        <slot></slot> 
      </div>
        `;
  }
}

customElements.define('my-box', MyBox);
