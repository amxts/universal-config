// The module's own bookkeeping. Not part of its API - index.ts does not export it.
import { Entry } from "./types";

/** Where a path leads: the entry, and the line of a block it means. */
export interface Found {
	entry: Entry;
	line: number;
}
