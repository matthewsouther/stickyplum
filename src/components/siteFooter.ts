import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-footer")
export class SiteFooter extends LitElement {
  render() {
    return html`
      <div class="wrapper">
        <div class="links">
          <div><a class="link1" href="/calendar">Calendar</a></div>
          <div><a class="link2" href="/past-events">Past Events</a></div>
          <div><a class="link3" href="/rsvp">RSVP</a></div>
        </div>
        <div class="subscribeForm">
          <div class="subscribeCallout">Subscribe to our mailing list!</div>
          <div id="mc_embed_shell">
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us21.list-manage.com/subscribe/post?u=2903e1a8680309f20701fbf29&amp;id=f09177a0f8&amp;f_id=002be9e6f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input
                      type="text"
                      name="FNAME"
                      class=" text"
                      id="mce-FNAME"
                      value=""
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input
                      type="text"
                      name="LNAME"
                      class=" text"
                      id="mce-LNAME"
                      value=""
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">
                      Email <span class="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      class="required email"
                      id="mce-EMAIL"
                      value=""
                      required
                    /><span
                      id="mce-EMAIL-HELPERTEXT"
                      class="helper_text"
                    ></span>
                  </div>
                  <div id="mce-responses" class="clear foot">
                    <div
                      class="response"
                      id="mce-error-response"
                      style="display: none;"
                    ></div>
                    <div
                      class="response"
                      id="mce-success-response"
                      style="display: none;"
                    ></div>
                  </div>
                  <div
                    aria-hidden="true"
                    style="position: absolute; left: -5000px;"
                  >
                    /* real people should not fill this in and expect good
                    things - do not remove this or risk form bot signups */
                    <input
                      type="text"
                      name="b_2903e1a8680309f20701fbf29_f09177a0f8"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button"
                      value="Subscribe"
                    />
                    <a
                      href="http://eepurl.com/iwbl3o"
                      title="Mailchimp - email marketing made easy and fun"
                      ><img
                        class="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style="width: 220px; height: 40px;"
                    /></a>
                  </div>
                </div>
              </form>
            </div>
            <script
              type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
            ></script>
            <script type="text/javascript">
              (function ($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[1] = "FNAME";
                ftypes[1] = "text";
                fnames[2] = "LNAME";
                ftypes[2] = "text";
                fnames[0] = "EMAIL";
                ftypes[0] = "email";
              })(jQuery);
              var $mcj = jQuery.noConflict(true);
            </script>
          </div>
        </div>
      </div>
      <div class="footnote">
        Website by <a href="https://matthewsouther.com">Matthew Souther</a>.
        Built with Lit + TypeScript + Vite.
        <a href="https://github.com/matthewsouther/stickyplum">
          See GitHub repo
        </a>
      </div>
    `;
  }

  static styles = css`
    .wrapper {
      display: grid;
      grid-template-columns: auto;
      margin-top: 3em;
    }

    .links {
      font-family: var(--header-2-font);
      font-weight: bold;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
    }

    .link1 {
      color: var(--color-2);
    }

    .link2 {
      color: var(--color-3);
    }

    .link3 {
      color: var(--color-4);
    }

    .subscribeCallout {
      color: var(--color-1);
      font-family: var(--header-2-font);
    }

    .asterisk {
      font-size: small;
      color: red;
    }

    .foot {
      margin-top: 0.25rem;
      display: grid;
      grid-template-columns: auto auto;
    }

    input[type="submit"] {
      border: none;
      background-color: var(--color-1);
      font-family: var(--header-2-font);
      color: white;
      padding: 0.5 1rem;
      border-radius: 1rem;
      cursor: pointer;
    }

    .footnote {
      font-size: smaller;
      margin-top: 1rem;
    }

    @media only screen and (min-width: 920px) {
      /* For desktop */
      .wrapper {
        grid-template-columns: auto auto;
      }

      .subscribeForm {
        margin-top: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-footer": SiteFooter;
  }
}
