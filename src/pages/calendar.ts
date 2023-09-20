import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { events } from "../eventData";
import "../components/calendarEvent";

@customElement("page-calendar")
export class Calendar extends LitElement {
  render = () => html`
    <h2>Calendar</h2>
    <p>
      All concerts are held outside in our yard (or inside if it's over 90°).
      Cross streets are NE 47th and Going in Portland (RSVP for the exact
      location).
    </p>
    <div>
      ${events.length
        ? events
            .filter((event) => new Date(event.date) > new Date())
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .map(
              (event) =>
                html`<calendar-event
                  eventName=${event.title}
                  date=${event.date}
                  html=${event.html}
                ></calendar-event>`
            )
        : "No upcoming events"}
    </div>
  `;

  static styles = css`
    h2 {
      font-family: var(--header-2-font);
      color: var(--color-2);
    }
  `;
}
