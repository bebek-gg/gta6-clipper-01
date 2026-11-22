// main.ts — gta6-clipper-01 entry runner.
// Reads VIDEO.json from the repo root (MAKEFUN_BOT_DIR) and copies it
// byte-for-byte to $MAKEFUN_OUTPUT_DIR/VIDEO.json. Stdlib only, no network.
// Prints nothing on success; exits non-zero with a message on stderr on failure.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const src = join(botDir, "VIDEO.json");
const dst = join(outDir, "VIDEO.json");

mkdirSync(outDir, { recursive: true });
const data = readFileSync(src);
writeFileSync(dst, data);

// Verify the copy is byte-for-byte identical before reporting success.
const written = readFileSync(dst);
if (!written.equals(data)) {
  throw new Error(`VIDEO.json copy mismatch: ${dst} differs from ${src}`);
}
