import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { events } from "../eventData";
import "../components/calendarEvent";

@customElement("page-past-events")
export class PastEvents extends LitElement {
  render = () => html`
    <h2>Past Events</h2>
    <div>
      ${events.length
        ? events
            .filter((event) => new Date(event.date) <= new Date())
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
