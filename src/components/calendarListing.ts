import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { events } from "../eventData";
import "./calendarEvent";
console.log(events);
@customElement("calendar-listing")
export class CalendarListing extends LitElement {
  events = events
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  renderEvents = () => html`
    <div>
      ${this.events.map(
        (event) =>
          html`<calendar-event
            eventId=${event.id}
            eventName=${event.title}
            date=${event.date}
            html=${event.html}
            hasRsvp
          ></calendar-event>`
      )}
    </div>
  `;

  renderNoUpcomingEvents = () => html`
    <div>
      Sorry, we don't have any upcoming concerts posted right now. Subscribe to
      our mailing list to be notified about future events!
    </div>
  `;

  render = () =>
    this.events.length ? this.renderEvents() : this.renderNoUpcomingEvents();
}
