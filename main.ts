import { mkdirSync, writeFileSync } from "node:fs";
import { ENTRY_LINE } from "./line.ts";

const line = ENTRY_LINE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
