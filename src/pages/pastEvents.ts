import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { events } from "../eventData";
import "../components/calendarEvent";

@customElement("page-past-events")
export class PastEvents extends LitElement {
  render = () => html`
    <h2>Past Events</h2>
    <p>
      Our very first performer, Jet Black Pearl, suggested the name "Sticky Plum
      Concerts", and it stuck! We're grateful to these excellent artists and all
      the good people who came out to see them.
    </p>
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
                  eventId=${event.id}
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
