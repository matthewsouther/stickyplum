import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-contact")
export class Contact extends LitElement {
  render = () => html`Contact`;

  static styles = css`
    h2 {
      font-family: var(--header-2-font);
      color: var(--color-2);
    }
  `;
}
