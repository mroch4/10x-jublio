import { CONFIG, EVENT_CATEGORY } from "../config.js";

import Event from "./Event.js";

/// <summary>
///
/// </summary>
export default class DateCard {
  constructor(date) {
    this.date = date;
    this.events = this._getEvents();
  }

  _getEvents() {
    let events = [];

    CONFIG.forEach((item) => {
      if (this._shouldIncludeUnit(item.unit)) {
        for (let exp = item.min; exp <= item.max; exp++) {
          const exponent = 10 ** exp;
          const base = this._getBase(item.unit);

          const event = new Event(base.add({ [item.unit]: exponent }), item.unit, exponent);

          events.push(event);
        }
      }
    });

    return events;
  }

  /// <summary>
  /// This method is responsible for determining whether a given unit should be included in the card or not.
  /// </summary>
  _shouldIncludeUnit(unit) {
    return ["days", "weeks", "months"].includes(unit);
  }

  _getBase(unit) {
    switch (unit) {
      case "days":
      case "weeks":
      case "months":
        return this.date;

      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  print() {
    var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    order.forEach((id) => this._print(EVENT_CATEGORY[id]));
  }

  _print(categoryName) {
    const filteredEvents = this.events.filter((x) => x.category === categoryName);
    if (filteredEvents.length > 0) {
      console.log(`${categoryName.toUpperCase()} (${filteredEvents.length}):`);
      console.table(filteredEvents.sort((a, b) => Temporal.PlainDateTime.compare(a.date, b.date)));
    }
  }
}
