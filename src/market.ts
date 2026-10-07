import type { Price } from "./types";
 
function randomPrice(min: number, max: number): number {
  return Math.round((min + Math.random() * (max - min)) * 100) / 100;
}
 
export class Market {
  // prices change everyday
  newPrices(): Price {
    return {
      cups: randomPrice(0.03, 0.08),
      ice: randomPrice(0.01, 0.04),
      lemons: randomPrice(0.25, 0.6),
      sugar: randomPrice(0.2, 0.5),
    };
  }
}