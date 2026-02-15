import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/rsvpForm";

@customElement("page-rsvp")
export class RSVP extends LitElement {
  render = () => html`
    <h2>RSVP</h2>
    <p>
      Let us know you're coming! We'll make sure there's space, and we'll email
      you a confirmation with the address within 1-2 days (usually same day on
      concert days).
    </p>
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
