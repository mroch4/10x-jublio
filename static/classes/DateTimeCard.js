import DateCard from "./DateCard.js";

/// <summary>
///
/// </summary>
export default class DateTimeCard extends DateCard {
  constructor(dateTime) {
    super(dateTime);
  }

  /// <summary>
  /// This method is responsible for determining whether a given unit should be included in the card or not.
  /// </summary>
  _shouldIncludeUnit(unit) {
    return ["seconds", "minutes", "hours", "days", "weeks", "months"].includes(unit);
  }

  _getBase(unit) {
    switch (unit) {
      case "seconds":
      case "minutes":
      case "hours":
        return this.date;

      case "days":
      case "weeks":
      case "months":
        return this.date.toPlainDate();

      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }
}
