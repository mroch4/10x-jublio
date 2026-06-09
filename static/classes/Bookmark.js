/// <summary>
/// This class represents an event saved by a user as a bookmark (to the firebase database).
/// It contains:
/// 1) The unique, friendly to the user, name of the event and
/// 2) The input date/datetime associated with the user's event.
/// </summary>
export default class Bookmark {
  constructor(name, input) {
    this.name = name;
    this.input = input;
  }
}
