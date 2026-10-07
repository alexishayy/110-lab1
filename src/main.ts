import { LemonadeStand } from "./stand.js";
import { Market } from "./market.js";
import { weatherType, demandFor } from "./weather.js";
import { askInteger, askYesNo, pause, closeInput } from "./input.js";
import { showIntro, showMorning, showReport } from "./display.js";
import { SUPPLY_NAMES } from "./types.js";

async function main(): Promise<void> {
  const stand = new LemonadeStand(20);
  const market = new Market();

  showIntro(stand.cash);
  await pause("Press Enter to start: ");

  let day = 1;
  while (true) {
    const weather = weatherType();
    const prices = market.newPrices();
    showMorning(day, weather, prices, stand.cash, stand.inventory.snapshot());

    for (const name of SUPPLY_NAMES) {
      while (true) {
        const amount = await askInteger(`How many ${name} to buy? `);
        if (stand.buy(name, amount, prices[name])) break;
        console.log(`You can't afford that! You only have $${stand.cash.toFixed(2)}.`);
      }
    }

    const cupsSold = stand.simulateDay(demandFor(weather));
    showReport(cupsSold, stand.cash, stand.inventory.snapshot());

    if (!(await askYesNo("\nPlay another day? (y/n) "))) break;
    day++;
  }

  console.log(`Thanks for playing! You finished with $${stand.cash.toFixed(2)}.`);
  closeInput();
}

main();