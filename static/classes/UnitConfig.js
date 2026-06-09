/// <summary>
/// Wrapper to define time units and their min/max values for the DateTimeCard
/// Min and max are the renages for exponent values (e.g., min=0, max=3 means 10^0 to 10^3)
/// Min values are set to ensure that the generated events are not too close to the current date, while still being relevant and interesting for users.
/// Max values are set to ensure that the generated events are within a reasonable range for human life expectancy and relevance.
/// </summary>
export default class UnitConfig {
  constructor(unit, min, max) {
    this.unit = unit;
    this.min = min;
    this.max = max;
  }
}
