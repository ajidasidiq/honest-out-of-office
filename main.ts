// The Painfully Honest Out-of-Office — make.fun bounty entry.
// Writes one brutally honest but still polite out-of-office auto-reply
// (a single sentence, at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Thank you for your email \u2014 I'm away until Monday, and honestly your message will join the 214 unread ones I'm already pretending don't exist; I'll reply as soon as I can, I promise.";

// Validation gate: the entry must be exactly one sentence of at most 200 characters.
if (ENTRY.length > 200 || (ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be a single sentence of at most 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
