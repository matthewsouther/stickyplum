export class Event {
  id: string = "";
  title: string = "";
  date: string = "";
  html: string = "";
}

type Glob = {
  [key: string]: () => { default: Event[] };
};

export const events: Event[] = [];

const load = async () => {
  const data = import.meta.glob<Glob>("../dist-data/*.json");
  const EVENTS_JSON_FILE = "../dist-data/events.json";
  if (data[EVENTS_JSON_FILE]) {
    const eventsGeneric = await data[EVENTS_JSON_FILE]();
    if (Array.isArray(eventsGeneric.default)) {
      events.push(...eventsGeneric.default);
    }
  }
};

export { load };
