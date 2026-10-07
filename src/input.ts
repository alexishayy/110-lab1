import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export async function pause(prompt: string): Promise<void> {
  await rl.question(prompt);
}

// Keeps asking until the user types a whole number >= 0
export async function askInteger(prompt: string): Promise<number> {
  while (true) {
    const answer = await rl.question(prompt);
    const n = Number(answer);
    if (answer.trim() !== "" && Number.isInteger(n) && n >= 0) return n;
    console.log("Please enter a whole number, 0 or more.");
  }
}

export async function askYesNo(prompt: string): Promise<boolean> {
  while (true) {
    const answer = (await rl.question(prompt)).trim().toLowerCase();
    if (answer === "y" || answer === "yes") return true;
    if (answer === "n" || answer === "no") return false;
    console.log("Please type y or n.");
  }
}

export function closeInput(): void {
  rl.close(); // without this, the program may never exit
}