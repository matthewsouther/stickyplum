import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("calendar-event")
export class CalendarEvent extends LitElement {
  @property({ type: String }) eventName: string = "";
  @property({ type: String }) date: string = "";
  @property({ type: String }) html: string = "";

  render = () => html`
    <h3>${this.eventName}</h3>
    <p>
      ${new Date(this.date).toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        hour12: true,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}
    </p>
    <div class="eventBody">${unsafeHTML(this.html)}</div>
  `;

  static styles = css`
    h3 {
      font-family: var(--header-3-font);
      color: var(--color-3);
    }

    img {
      max-width: 100%;
    }
  `;
}
