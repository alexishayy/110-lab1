import { Inventory } from "./inventory.js";
import { Supplies, SupplyName } from "./types.js";

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