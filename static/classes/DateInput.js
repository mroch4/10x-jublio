export default class DateInput {
  constructor(year, month, day) {
    this.year = year;
    this.month = this._getMonth(month);
    this.day = this._getPaddedValue(day, "day");

    this._buildDate();
  }

  _getMonth(value) {
    this._validateNumber(value, "month", 12);
    return this._getPaddedValue(value);
  }

  _validateNumber(value, unit, maxValue) {
    switch (true) {
      case isNaN(value):
        throw new Error(`Value of ${unit} is not a number!`);
      case value < 0:
        throw new Error(`Value of ${unit} is less than 0!`);
      case value > maxValue:
        throw new Error(`Value of ${unit} is more than ${maxValue}!`);
      default:
    }
  }

  _getPaddedValue(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  _buildDate() {
    this.dateString = this._getDateString();
    this.date = this._getDate();

    // this._print('dateString', this.dateString);
    // this._print('date', this.dateString);
  }

  _getDateString() {
    return `${this.year}-${this.month}-${this.day}`;
  }

  _getDate() {
    return Temporal.PlainDate.from(this.dateString);
  }

  _getISOString() {
    return this.dateString;
  }

  _print(label, object) {
    console.log(`${label}:`, object);
  }
}
