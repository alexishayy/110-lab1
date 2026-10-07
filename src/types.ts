export type Weather = "sunny" | "cloudy" | "rainy" | "hot";

//interface = shape of an object: properties it has and its types
export interface Supplies {
  cups: number;
  ice: number;
  lemons: number;
  sugar: number;
}

// "cups" | "ice" | "lemons" | "sugar"
//keyof Supplies = names of the prop of supplies
//must only accept param that is exact same as supplies
export type SupplyName = keyof Supplies;

// prices is an object with cups, ice, lemons, sugar, each at nums
export type Prices = Record<SupplyName, number>;

export const SUPPLY_NAMES: SupplyName[] = ["cups", "ice",]