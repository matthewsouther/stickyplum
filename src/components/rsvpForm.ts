import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { events } from "../eventData";

class RsvpFormData {
  [key: string]: any;
  trapTheBots: string | null = null;
  name: string | null = null;
  email: string | null = null;
  concert: string | null = null;
  numberOfAdults: number | null = null;
  numberOfKids: number | null = null;
  agesOfKids: string | null = null;
  howDidYouHearAboutUs: string | null = null;
  comments: string | null = null;
}

@customElement("rsvp-form")
export class RsvpForm extends LitElement {
  eventOptions = events
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((event) => ({
      label: `${new Date(event.date).toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        hour12: true,
        weekday: "short",
        month: "short",
        day: "numeric",
      })} | ${event.title}`,
      value: event.id,
    }));

  @property({ type: Object })
  data = new RsvpFormData();

  connectedCallback(): void {
    super.connectedCallback();
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("e");
    if (eventId) {
      this.data.concert = eventId;
    }
  }

  // Prevent non-numeric characters in number fields
  handleNumberKeypress = (event: KeyboardEvent) => {
    if (event.key.length === 1 && /\D/.test(event.key)) {
      event.preventDefault();
    }
  };

  handleInput = (event: InputEvent) => {
    const target = event.target as HTMLFormElement;
    if (target) {
      let { name, value } = target;
      if (target.type === "number") value = parseInt(value);
      this.data = { ...this.data, [name]: value };
    }
  };

  handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const headers = { "Content-Type": "application/x-www-form-urlencoded" };
    const body = new URLSearchParams(formData as any).toString();
    try {
      await fetch("/", { method: "POST", headers, body });
      alert("Thank you for your RSVP!");
      form.reset();
    } catch (err) {
      alert(err);
    }
  };

  renderForm = () => html`
    <form name="rsvp" method="post" netlify @submit="${this.handleSubmit}">
      <input type="hidden" name="form-name" value="rsvp" />
      <div>
        <label class="block required">Your name</label>
        <input type="text" name="name" required @input="${this.handleInput}" />
      </div>
      <div>
        <label class="block required">Your email</label>
        <input
          name="email"
          type="email"
          required
          @input="${this.handleInput}"
        />
      </div>
      <div>
        <label class="block required">
          Which concert would you like to attend?
        </label>
        ${this.eventOptions.map(
          (concert) => html`
            <input
              type="radio"
              id="${concert.value}"
              name="concert"
              value="${concert.value}"
              ?checked="${this.data.concert === concert.value}"
              required
              @input="${this.handleInput}"
            />
              <label for="${concert.value}"> ${concert.label} </label><br />
          `
        )}
      </div>
      <div>
        <label class="block required"> How many adults will be coming? </label>
        <input
          name="numberOfAdults"
          type="number"
          inputmode="numeric"
          min="1"
          max="10"
          required
          @keypress="${this.handleNumberKeypress}"
          @input="${this.handleInput}"
        />
      </div>
      <div>
        <label class="block"> How many kids will be coming? </label>
        <input
          name="numberOfKids"
          type="number"
          inputmode="numeric"
          min="0"
          max="10"
          @keypress="${this.handleNumberKeypress}"
          @input="${this.handleInput}"
        />
      </div>
      ${this.data.numberOfKids
        ? html`
            <div>
              <label class="block">Ages of kids</label>
              <input
                type="text"
                name="agesOfKids"
                @input="${this.handleInput}"
              />
            </div>
          `
        : html``}
      <div>
        <label class="block"> How did you hear about us? </label>
        <textarea
          name="howDidYouHearAboutUs"
          @input="${this.handleInput}"
        ></textarea>
      </div>
      <div>
        <label class="block"> Comments/questions: </label>
        <textarea name="comments" @input="${this.handleInput}"></textarea>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  `;

  renderNoUpcomingEvents = () => html`
    <div>
      Sorry, we don't have any upcoming concerts posted. Subscribe to our
      mailing list to be notified about future events!
    </div>
  `;

  render = () => {
    return this.eventOptions.length
      ? this.renderForm()
      : this.renderNoUpcomingEvents();
    // return this.renderNoUpcomingEvents();
  };

  static styles = css`
    * {
      box-sizing: border-box;
    }
    form,
    div {
      max-width: 100%;
    }
    /* Hide arrows on number input */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    .hidden {
      display: none;
      visibility: hidden;
    }
    .block {
      display: block;
      margin: 1em 0 0.25em 0;
    }
    .required:after {
      content: " *";
      color: red;
    }
    input:not([type="radio"]),
    textarea {
      display: block;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      padding: 0.5em;
      min-width: 10em;
      max-width: 100%;
      border: none;
      background-color: rgb(250, 250, 250, 0.3);
    }
    input[type="text"] {
      width: 15em;
    }
    input[type="email"] {
      width: 20em;
    }
    input[type="radio"] {
      transform: scale(1.5);
    }
    textarea {
      width: 30em;
    }
    button {
      margin-top: 1em;
      padding: 1em;
      border: 0;
      border-radius: 0;
      font-family: var(--header-2-font);
      font-size: large;
      color: white;
      background-color: var(--color-4);
      cursor: pointer;
    }
  `;
}
