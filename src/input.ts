import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({ input: stdin, output: stdout });

export async function ask(question: string): Promise<string> {
  return await rl.question(question);
}

export function closeInput(): void {
  rl.close();
}