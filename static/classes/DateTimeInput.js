import DateInput from "./DateInput.js";

export default class DateTimeInput extends DateInput {
  constructor(year, month, day, hour, minute) {
    super(year, month, day);
    this.hour = this._getHour(hour);
    this.minute = this._getMinute(minute);

    this._buildDateTime();
  }

  _getHour(value) {
    this._validateNumber(value, "hour", 23);
    return this._getPaddedValue(value);
  }

  _getMinute(value) {
    this._validateNumber(value, "minute", 59);
    return this._getPaddedValue(value);
  }

  _buildDateTime() {
    this.timeString = this._getTimeString();
    this.dateTimeString = this._getDateTimeString();
    this.dateTime = this._getDateTime();

    // this._print('timeString', this.timeString);
    // this._print('dateTimeString', this.dateTimeString);
    // this._print('dateTime', this.dateTime);
  }

  _getTimeString() {
    return `T${this.hour}:${this.minute}:00`;
  }

  _getDateTimeString() {
    return `${this.dateString}${this.timeString}`;
  }

  _getDateTime() {
    return Temporal.PlainDateTime.from(this.dateTimeString);
  }

  _getISOString() {
    return this.dateTimeString;
  }
}
