import type { Prices, Supplies, Weather } from "./types.js";
import { SUPPLY_NAMES } from "./types.js";

function money(x: number): string {
  return "$" + x.toFixed(2);
}

export function showIntro(startingCash: number): void {
  console.log("===========================================");
  console.log("              LEMONADE STAND               ");
  console.log("===========================================");
  console.log("Each day you will check the weather and prices,");
  console.log("buy supplies, and see how many cups you sell.");
  console.log(`You start with ${money(startingCash)}.`);
  console.log();
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