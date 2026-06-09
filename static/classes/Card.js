import { DATETIME_FORMAT, DATE_FORMAT } from "../config.js";

import DateCard from "./DateCard.js";
import DateTimeCard from "./DateTimeCard.js";

/// <summary>
/// This class is responsible for the following:
/// 1) Determining type of card to create and render based on the input date format and
/// 2) Benchmarking the time taken to compute events values and print the card.
/// </summary>
export default class Card {
  constructor(date) {
    this.date = date;
    this.card = this.#getCard(this.date);
  }

  _print() {
    this.#benchMark(() => this.card.print());
  }

  #benchMark(callback) {
    const start = new Date();
    callback();
    const end = new Date();
    const diff = end.valueOf() - start.valueOf();
    console.log("Computing took [ms]:", diff);
  }

  #getCard() {
    if (this.date.length === DATE_FORMAT.length) {
      return new DateCard(Temporal.PlainDate.from(this.date));
    }

    if (this.date.length === DATETIME_FORMAT.length) {
      return new DateTimeCard(Temporal.PlainDateTime.from(this.date));
    }

    throw new Error(`Unknown input format: ${this.date}`);
  }
}
