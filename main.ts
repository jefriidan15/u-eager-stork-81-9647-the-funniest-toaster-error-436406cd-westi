import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR 04: Bread refused to brown. It has unionized. Please negotiate.";

mkdirSync("/output", { recursive: true });
// Write via a temp file and rename, so a concurrent reader never sees a half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
