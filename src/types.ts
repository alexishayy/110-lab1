export type Weather = "sunny" | "cloudy" | "rainy" | "hot";

// What persists between days
export interface GameState {
  day: number;
  cash: number;
  cupsInStock: number;
}

// What the player chooses each day
export interface PlayerChoices {
  price: number;
  cupsToMake: number;
}

// What happened at the end of the day
export interface DayResult {
  weather: Weather;
  cupsSold: number;
  revenue: number;
  cost: number;
  profit: number;
}