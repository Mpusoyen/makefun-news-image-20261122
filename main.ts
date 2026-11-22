// news-image-20261122 entry (Node 22, standard library only): the finished poster for
// Sunday 22 November 2026 is the entry.png beside this file, and this program hands it
// in by copying it to the output directory as entry.png. The program runs offline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
