export type Weather = "sunny" | "cloudy" | "rainy" | "hot";

export interface Supplies {
  cups: number;
  ice: number;
  lemons: number;
  sugar: number;
}
export type SupplyName = keyof Supplies;
//each num is price, same items used
export type Price = Record<SupplyName, number>;

export const SUPPLY_NAMES: SupplyName[] = ["cups", "ice", "lemons", "sugar"];
