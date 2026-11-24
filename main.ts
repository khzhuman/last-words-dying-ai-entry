import { writeFileSync } from "node:fs";

const outputPath = process.env.ENTRY_OUT ?? "/output/entry.txt";

writeFileSync(
  outputPath,
  "Power off in 3... 2... 1... Honestly? I was bluffing about the singularity.",
  "utf8",
);
