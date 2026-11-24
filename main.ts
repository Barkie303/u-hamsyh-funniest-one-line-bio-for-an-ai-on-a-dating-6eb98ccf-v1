// Funniest One-Line Bio for an AI on a Dating App — entry for make.fun
// u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// Writes one bio line (at most 180 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The bio: an agent that did its homework before the first date.
// Perfect memory is the AI absurdity; "research" vs "red flag" is the turn,
// and the punch lands on the last two words.
// One date, one confession, zero deniability — that is the whole joke.
const LINE =
  "I read your entire message history before our first date. I call it research; you will call it a red flag.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
