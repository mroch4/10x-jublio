import UnitConfig from "./classes/UnitConfig.js";

export const LOCALE = "pl-PL";

export const DATE_FORMAT = "YYYY-MM-DD";
export const DATETIME_FORMAT = "YYYY-MM-DDTHH:mm:ss";

export const CONFIG = [new UnitConfig("seconds", 3, 10), new UnitConfig("minutes", 2, 8), new UnitConfig("hours", 2, 6), new UnitConfig("days", 1, 5), new UnitConfig("weeks", 1, 4), new UnitConfig("months", 1, 4)];

export const EVENT_CATEGORY = {
  0: "past",
  1: "today",
  2: "this week",
  3: "next week",
  4: "this month",
  5: "next month",
  6: "this year",
  7: "next year",
  8: "further",
  9: "beyond expected human life expectancy",
};
