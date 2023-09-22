import { Route, Router } from "@vaadin/router";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import * as eventData from "./eventData";
import "./components/siteNav";

@customElement("lit-site")
export class Site extends LitElement {
  render = () => html`
    <site-nav></site-nav>
    <slot></slot>
  `;
}

const routes: Route[] = [
  {
    path: "/",
    component: "lit-site",
    children: [
      {
        path: "/",
        component: "page-home",
        action: async () => {
          await import("./pages/home");
        },
      },
      {
        path: "calendar",
        component: "page-calendar",
        action: async () => {
          if (!eventData.events.length) await eventData.load();
          await import("./pages/calendar");
        },
      },
      {
        path: "past-events",
        component: "page-past-events",
        action: async () => {
          if (!eventData.events.length) await eventData.load();
          await import("./pages/pastEvents");
        },
      },
      {
        path: "rsvp",
        component: "page-rsvp",
        action: async () => {
          if (!eventData.events.length) await eventData.load();
          await import("./pages/rsvp");
        },
      },
    ],
  },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
