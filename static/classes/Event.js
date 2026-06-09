import { EVENT_CATEGORY, LOCALE } from "../config.js";

export default class Event {
  constructor(date, unit, exponent) {
    this.date = date;
    this.dateString = this.date.toLocaleString(LOCALE);
    this.label = `+ ${new Intl.NumberFormat(LOCALE).format(exponent)} ${unit}`;
    this.category = this.#getCategory();
  }

  #getCategory() {
    const now = Temporal.Now.plainDateISO();

    if (this.#isPast(now)) {
      return EVENT_CATEGORY[0];
    }

    if (this.#isBeyondLimit(now.add({ years: 75 }))) {
      return EVENT_CATEGORY[9];
    }

    if (this.#isToday(now)) {
      return EVENT_CATEGORY[1];
    }

    const currentWeekStarts = now.subtract({ days: now.dayOfWeek - 1 });
    const currentWeekEnds = currentWeekStarts.add({ days: 6 });

    if (this.#isThisWeek(currentWeekStarts, currentWeekEnds)) {
      return EVENT_CATEGORY[2];
    }

    const nextWeekStarts = currentWeekStarts.add({ days: 7 });
    const nextWeekEnds = currentWeekEnds.add({ days: 7 });

    if (this.#isNextWeek(nextWeekStarts, nextWeekEnds)) {
      return EVENT_CATEGORY[3];
    }

    if (this.#isThisMonth(now)) {
      return EVENT_CATEGORY[4];
    }

    if (this.#isNextMonth(now.add({ months: 1 }))) {
      return EVENT_CATEGORY[5];
    }

    if (this.#isThisYear(now)) {
      return EVENT_CATEGORY[6];
    }

    if (this.#isNextYear(now)) {
      return EVENT_CATEGORY[7];
    }

    return EVENT_CATEGORY[8];
  }

  #isBeyondLimit(limit) {
    return Temporal.PlainDate.compare(this.date, limit) > 0;
  }

  //isNext

  #isNextMonth(nextMonth) {
    return this.date.year === nextMonth.year && this.date.month === nextMonth.month;
  }

  #isNextWeek(weekStarts, weekEnds) {
    return this.#isWeek(weekStarts, weekEnds);
  }

  #isNextYear(now) {
    return this.date.year === now.add({ years: 1 }).year;
  }

  //isThis

  #isThisMonth(now) {
    return this.date.year === now.year && this.date.month === now.month;
  }

  #isThisWeek(weekStarts, weekEnds) {
    return this.#isWeek(weekStarts, weekEnds);
  }

  #isThisYear(now) {
    return this.date.year === now.year;
  }

  //other

  #isPast(now) {
    return Temporal.PlainDate.compare(this.date, now) < 0;
  }

  #isToday(now) {
    return Temporal.PlainDate.compare(this.date, now) === 0;
  }

  #isWeek(weekStarts, weekEnds) {
    return Temporal.PlainDate.compare(this.date, weekStarts) >= 0 && Temporal.PlainDate.compare(this.date, weekEnds) <= 0;
  }
}
