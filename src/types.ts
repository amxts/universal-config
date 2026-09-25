/**
 * The types of Universal Config's API: configs, sections and their entries.
 */

/** A `key = value` line, or a `key = { ... }` block. */
export type EntryKind = "value" | "block";

/** What a block holds: one value, a line of strings, or rows. */
export type ContentKind = "value" | "strings" | "entries";

/** A line of a section or a row of a block. */
export interface Entry {
	key: string;
	kind: EntryKind;
	content: ContentKind;
	values: string[];
	rows: Entry[];
	/** The comment and blank lines read before it; null for one made at run time. */
	comments: string[] | null;
}

/** A [section] of a config file. */
export interface Section {
	name: string;
	/** The comment and blank lines read before it; null for one made at run time. */
	comments: string[] | null;
	entries: Entry[];
}

/** A loaded config file. */
export interface Config {
	/** The name it was loaded under, ".ini" included. */
	name: string;
	/** In file order; a name the file has twice is there twice. */
	sections: Section[];
}

/** One entry of a section as `entries()` lists it. */
export interface SectionEntry {
	key: string;
	/** The entry's values; empty for a block. */
	values: string[];
	block: boolean;
}

/** What `dump_config` prints for one section: the heading, then its entries. */
export interface SectionDump {
	heading: string;
	lines: string[];
}

/** Universal Config's options: `configs` in amxts.config.ts. */
export interface UniversalConfigOptions {
	/** The folder under configs/ that names are loaded from: "" is configs/ itself. */
	baseDir: string;
}

declare module "@amxts/core" {
	interface ModuleOptions {
		configs?: Partial<UniversalConfigOptions>;
	}
}
