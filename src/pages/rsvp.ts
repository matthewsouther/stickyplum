import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/rsvpForm";

@customElement("page-rsvp")
export class RSVP extends LitElement {
  render = () => html`
    <h2>RSVP</h2>
    <rsvp-form></rsvp-form>
  `;

  static styles = css`
    * {
      box-sizing: border-box;
    }
    h2 {
      font-family: var(--header-2-font);
      color: var(--color-2);
    }
  `;
}
