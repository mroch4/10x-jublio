import Bookmark from "/classes/Bookmark.js";
import Card from "/classes/Card.js";
import DateInput from "/classes/DateInput.js";
import DateTimeInput from "/classes/DateTimeInput.js";

let bookmarks = getBookmarks();
/// <summary>
/// Flow 1: User enters date manually
/// There will be a separate input (date picker) for date (year, month, day) - required to proceed
/// and a dedicated input (time picker) time (hour, minute) - optional to proceed, if not provided it will not be set to 00:00 (start of the day), but it will be Date only instead
/// User clicks a button to process the input(s) values and a card with the event category and time since the event is rendered
/// From the card user can:
/// 1) click a button to add the event to bookmarks (firebase) and see it in the list of bookmarks (flow 2)
/// 2) click a button to add the event to the calendar (google calendar, apple calendar)
/// </summary>
//processUserInput(moonLandingDateTime);

/// <summary>
/// Flow 2: App reads from firebase
/// User click on a bookmark and a card with the event category and time since the event is rendered
/// 1) click a button to add the event to bookmarks (firebase) and see it in the list of bookmarks (flow 2)
/// 2) click a calendar icon to add the event to the calendar (google calendar, apple calendar)
/// </summary>
processBookmark(Math.floor(Math.random() * bookmarks.length));

function processBookmark(index) {
  const event = bookmarks[index];
  console.log(`Event: ${event.name}`);
  printCard(event.input);
}

function processUserInput(date) {
  printCard(date._getISOString());
}

function printCard(date) {
  const card = new Card(date);
  card._print();
}

// predefined bookmarks for testing purposes, in the future they will be read from firebase
function getBookmarks() {
  const moonLandingDateTime = new DateTimeInput(1969, 7, 21, 2, 56);
  const birthdayDate = new DateInput(1992, 8, 12);
  const jp2Date = new DateInput(2005, 4, 2);
  const jp2DateTime = new DateTimeInput(2005, 4, 2, 21, 37);
  const weddingDate = new DateInput(2018, 9, 1);
  const now = new Date();

  let events = [];

  events.push(new Bookmark("Moon Landing", moonLandingDateTime._getISOString()));
  events.push(new Bookmark("My Birthday", birthdayDate._getISOString()));
  events.push(new Bookmark("Death of JPII", jp2Date._getISOString()));
  events.push(new Bookmark("Death of JPII", jp2DateTime._getISOString()));
  events.push(new Bookmark("Wedding Anniversary", weddingDate._getISOString()));
  events.push(new Bookmark("Now", now.toISOString().slice(0, 19)));

  return events;
}
