import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("calendar-event")
export class CalendarEvent extends LitElement {
  @property({ type: String }) eventId: string = "";
  @property({ type: String }) eventName: string = "";
  @property({ type: String }) date: string = "";
  @property({ type: String }) html: string = "";
  @property({ type: Boolean }) hasRsvp: boolean = false;

  handleRsvpClick = () => {
    window.location.href = `/rsvp?e=${this.eventId}`;
  };

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
    ${this.hasRsvp
      ? html`
          <div>
            <button @click="${this.handleRsvpClick}">RSVP</button>
          </div>
        `
      : html``}
  `;

  static styles = css`
    h3 {
      font-family: var(--header-3-font);
      font-weight: bold;
      color: var(--color-3);
    }

    img {
      max-width: 100%;
    }

    button {
      margin-top: 1em;
      padding: 1em;
      border: 0;
      border-radius: 0;
      font-family: var(--header-2-font);
      font-size: large;
      color: white;
      background-color: var(--color-2);
      cursor: pointer;
    }

    a:link {
      color: var(--color-1);
    }

    a:visited {
      color: var(--color-4);
    }
  `;
}
