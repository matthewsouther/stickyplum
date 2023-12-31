import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/calendarListing";

@customElement("page-calendar")
export class Calendar extends LitElement {
  render = () => html`
    <h2>Calendar</h2>
    <p>
      Concerts are mostly held May to September. Usually we gather outside in
      our yard, but we'll set up inside our air-conditioned house in case of
      high heat/rain/etc. Cross streets are NE 47th and Going in Portland (RSVP
      for the exact location).
    </p>
    <calendar-listing></calendar-listing>
  `;

  static styles = css`
    h2 {
      font-family: var(--header-2-font);
      color: var(--color-2);
    }
  `;
}
