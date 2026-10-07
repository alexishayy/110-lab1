import { Inventory } from "./inventory";
import type { Supplies, SupplyName } from "./types";

function roundToCents(x: number): number {
  return Math.round(x * 100) / 100;
}

export class LemonadeStand {
  private _cash: number;
  readonly inventory = new Inventory();
  // Public and mutable so the recipe can change over time
  recipe: Supplies = { cups: 1, ice: 2, lemons: 0.25, sugar: 0.25 };
  pricePerCup = 0.5;

  constructor(startingCash: number) {
    this._cash = startingCash;
  }

  get cash(): number {
    return this._cash;
  }

  // Returns false (and changes nothing) if the player can't afford it
  buy(item: SupplyName, amount: number, unitPrice: number): boolean {
    const cost = roundToCents(amount * unitPrice);
    if (cost > this._cash) return false;
    this._cash = roundToCents(this._cash - cost);
    this.inventory.add(item, amount);
    return true;
  }

  // Sells as many cups as demand AND supplies allow. Returns cups sold.
    simulateDay(demand: number): number {
        const sold = Math.min(demand, this.inventory.maxCups(this.recipe));
        this.inventory.consume(this.recipe, sold);
        this._cash = roundToCents(this._cash + sold * this.pricePerCup);
        return sold;
    }
}

export function showMorning(
  day: number,
  weather: Weather,
  prices: Prices,
  cash: number,
  inventory: Supplies
): void {
  console.log(`\n--- Day ${day} ---`);
  console.log(`Weather: ${weather}`);
  console.log(`Cash: ${money(cash)}`);
  console.log("Today's prices (and what you already have):");
  for (const name of SUPPLY_NAMES) {
    console.log(`  ${name}: ${money(prices[name])} each (you have ${inventory[name]})`);
  }
}
 
export function showReport(cupsSold: number, cash: number, left: Supplies): void {
  console.log("\n--- End of day ---");
  console.log(`Cups sold: ${cupsSold}`);
  console.log(`Cash: ${money(cash)}`);
  console.log("Supplies left:");
  for (const name of SUPPLY_NAMES) {
    console.log(`  ${name}: ${left[name]}`);
  }
}