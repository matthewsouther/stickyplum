import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-home")
export class Home extends LitElement {
  render = () => html`
    <div class="topImage">
      <img
        src="https://s3.us-west-2.amazonaws.com/stickyplum.com/sticky_plum_concert.jpg"
      />
    </div>
    <p>
      Started in 2023, <strong>Sticky Plum House Concerts</strong> are held in
      the Cully neighborhood of Portland, Oregon.
    </p>
    <p>
      These family-friendly concerts are intended to get grown-ups and kids out
      listening to good music. Kids are free to listen or play (with parent
      supervision as needed).
    </p>
    <p>
      We believe kids should be exposed to lots of different musical styles,
      parents should have an opportunity to see live music without hiring a
      babysitter, and the community should have events where neighbors and
      friends can come together around a shared love of music.
    </p>
    <p>
      All are welcome (with or without kids). We look forward to seeing you!
    </p>
  `;

  static styles = css`
    div.topImage {
      margin-top: 3em;
    }

    img {
      max-width: 100%;
    }
  `;
}
