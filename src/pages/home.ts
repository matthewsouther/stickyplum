import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-home")
export class Home extends LitElement {
  render = () => html`
    <div class="topImageContainer">
      <img
        src="https://s3.us-west-2.amazonaws.com/stickyplum.com/sticky_plum_concert.jpg"
      />
    </div>
    <p>
      Started in 2023, <strong>Sticky Plum House Concerts</strong> are held in
      the Cully neighborhood of Portland, Oregon.
    </p>
    <p>
      Named for the small yellow fruit produced by the tree whose shade forms
      our outdoor stage area, these family-friendly concerts are intended to get
      people of all ages out listening to good music. Kids are free to listen or
      play in the yard with parent supervision.
    </p>
    <p>
      We believe kids should be exposed to great music of all kinds; parents
      should be able to see live music without hiring a babysitter; and artists,
      neighbors, and friends should have opportunities to come together, share,
      and have fun.
    </p>
    <p>All are welcome, with or without kids. We look forward to seeing you!</p>
  `;

  static styles = css`
    .topImageContainer {
      margin-top: 3em;
    }

    img {
      max-width: 100%;
    }
  `;
}
