import type {Supplies, SupplyName} from "./types";
import { SUPPLY_NAMES } from "./types";

export class Inventory{
    private items: Supplies = {cups: 0,ice:0, lemons: 0, sugar:0};
    
    //add ingredient
    add(item: SupplyName, amount: number): void{
        this.items[item] += amount;
    }
    //get ingredient
    get(item: SupplyName): number {
    return this.items[item];
  }
 
  // logic for how many cups can be made w given recipe
  maxCups(recipe: Supplies): number {
    let max = Infinity;
    for (const name of SUPPLY_NAMES) {
      if (recipe[name] > 0) {
        max = Math.min(max, Math.floor(this.items[name] / recipe[name]));
      }
    }
    return max;
  }
  //max limits how many cups sold
 
  // using up ingredients to make lemonade
  //20 cups, removes 20 cups,40 ice, 5 lemons, 5 sugar
  consume(recipe: Supplies, cups: number): void {
    for (const name of SUPPLY_NAMES) {
      this.items[name] -= recipe[name] * cups;
    }
  }
 //copy
  snapshot(): Supplies {
    return { ...this.items };
  }
}
 