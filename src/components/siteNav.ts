import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("site-nav")
export class SiteNav extends LitElement {
  @property({ type: Boolean })
  isMenuOpen = false;

  handleMenuClick = () => {
    this.isMenuOpen = !this.isMenuOpen;
  };

  closeMenu = () => {
    this.isMenuOpen = false;
  };

  render() {
    return html`
      <div class="wrapper">
        <span class="siteName">
          <a href="/">
            <h1>Sticky Plum Concerts</h1>
          </a>
        </span>
        <span class="menuButton">
          <button @click="${this.handleMenuClick}">
            <svg height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
              />
            </svg>
          </button>
        </span>
        <span class="${this.isMenuOpen ? "navOptions showMenu" : "navOptions"}">
          <span
            ><a href="/calendar" @click="${this.closeMenu}">Calendar</a></span
          >
          <span
            ><a href="/past-events" @click="${this.closeMenu}"
              >Past Events</a
            ></span
          >
          <span><a href="/rsvp" @click="${this.closeMenu}">RSVP</a></span>
        </span>
      </div>
    `;
  }

  static styles = css`
    .wrapper {
      display: grid;
      grid-template-columns: auto auto;
      margin-top: 1em;
    }

    h1 {
      font-family: var(--header-1-font);
      font-size: 42px;
      background: linear-gradient(
        to right,
        var(--color-4),
        var(--color-3),
        var(--color-2)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* color: linear-gradient(to right, var(--color-1), white); */
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    button {
      border: none;
      background-color: transparent;
      margin-right: 0.5em;
    }

    button:hover {
      color: white;
      background-color: var(--color-1);
    }

    button:hover svg path {
      fill: white;
    }

    .menuButton {
      display: flex;
      align-items: center;
      justify-self: end;
    }

    .navOptions {
      display: none;
    }

    .navOptions.showMenu {
      display: grid;
      grid-template-columns: auto;
      grid-column: 1 / span 2;
    }

    .navOptions span {
      margin: auto;
      text-align: center;
      padding: 0.5em;
      width: 100%;
    }

    .navOptions span:hover {
      color: white;
    }

    .navOptions span:nth-child(1):hover {
      background-color: var(--color-2);
    }

    .navOptions span:nth-child(2):hover {
      background-color: var(--color-3);
    }

    .navOptions span:nth-child(3):hover {
      background-color: var(--color-4);
    }

    .navOptions span a {
      font-family: var(--header-2-font);
      font-weight: bold;
      width: 100%;
      height: 100%;
    }

    .navOptions span:nth-child(1) a {
      color: var(--color-2);
    }

    .navOptions span:nth-child(2) a {
      color: var(--color-3);
    }

    .navOptions span:nth-child(3) a {
      color: var(--color-4);
    }

    .navOptions span:hover a {
      color: white;
    }

    @media only screen and (min-width: 920px) {
      /* For desktop */
      .navOptions {
        display: grid;
        grid-template-columns: repeat(3, 120px);
        grid-column: 2;
        gap: 1em;
      }
      .navOptions span {
        display: flex;
        align-items: end;
        text-align: initial;
        margin: initial;
      }
      .menuButton {
        display: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-nav": SiteNav;
  }
}
