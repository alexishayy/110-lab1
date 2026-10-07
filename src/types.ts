export type Weather = "sunny" | "cloudy" | "rainy" | "hot";

export interface Supplies {
  cups: number;
  ice: number;
  lemons: number;
  sugar: number;
}

// "cups" | "ice" | "lemons" | "sugar"
export type SupplyName = keyof Supplies;

// Same four items, but each number is a price
export type Prices = Record<SupplyName, number>;

export const SUPPLY_NAMES: SupplyName[] = ["cups", "ice",]