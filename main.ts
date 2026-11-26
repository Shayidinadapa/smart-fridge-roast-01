// Roast the Smart Fridge: One Line, Best Laugh Wins.
// main.ts writes a single-line roast of a smart home gadget to /output/entry.txt.
// Runs on Node 22 with no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge beeps 'door open' at me like I broke in — buddy, I pay the electric bill.";

function main(): void {
  const line = ROAST.trim();
  if (line.length === 0 || line.length > 160) {
    throw new Error(`Roast must be 1-160 characters, got ${line.length}.`);
  }
  // The gate requires exactly one line: reject any newline or carriage
  // return so a stray line break can never slip into the entry.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast must be a single line.");
  }
  if (line !== ROAST) {
    throw new Error("Roast must not start or end with whitespace.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
