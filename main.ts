import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Laugh in One Line — exactly one line, under 200 characters.
// Setup: a phone dying mid-search. Twist: the irony outlives the phone.
export const LINE =
  "My phone died at 2% while I was Googling how to make batteries last longer — the irony outlived the phone.";

// The gate allows 1..199 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length >= 200 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
