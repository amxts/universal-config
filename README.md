<div align="center">

# Config Core

*INI configs: sections, typed values, paths into blocks*

[![amxts module](https://img.shields.io/badge/amxts-module-3178c6?style=flat-square)](https://amxts.github.io/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

[From TypeScript](#from-typescript) • [From any plugin](#from-any-plugin-one-config-core-for-the-server) • [For Pawn plugins](#for-pawn-plugins) • [Differences](#where-it-differs-from-the-original)

**English** | [Русский](README.ru.md)

</div>

INI files with `[sections]`, `key = value` lines, lines of several values and `key = { ... }` blocks of rows, read into memory and written back with their comments and blank lines.

## From TypeScript

```ts
import * as ini from "@amxts/config-core";

ini.setBaseDir("myplugin");                       // configs/myplugin/
const config = ini.load("settings");              // configs/myplugin/settings.ini
const main = ini.section(config, "MAIN");
if (main == null) return;

ini.getValue(main, "CHAT_PREFIX");                // string | null
ini.getInt(main, "HUD/HIDE_TIME");                // a path into blocks
ini.getNumber(main, "ROUND_TIME");
ini.getBoolean(main, "DM_MODE");
ini.getWords(main, "MAPS");                       // string[] | null
ini.getValueByPath(main, "CVARS", 1, 3);          // value 1 of row 3 of the block

ini.set(main, "CHAT_PREFIX", "[HNS]");
ini.setNumber(main, "ROUND_TIME", 2.5);
ini.save(config, "settings.ini");
```

A config and a section are plain objects (`Config`, `Section`); everything
is done by the module's functions, as with `fs`.

- A key is found case-insensitively; a key with `/` is a path into blocks.
- `index` is the place of a value in its line (`HIDE_TIME = 255 50 50` — 0,
  1, 2); `line` is a row of a block.
- A file that is not there loads empty, to be filled and saved.
- `set` makes what is missing: the key, the rows up to `line`, the blocks on
  a path. It returns false where it cannot: a path through a plain value.
- Saving writes the comments and blank lines back where they were.

## From any plugin: one Config Core for the server

The server has one instance of `@amxts/config-core`: the
config-core plugin's. Any other plugin that imports it calls that
instance, with the same functions and types (see
Shared modules): the base folder is one for the whole
server (menu-core reads its menus from it too), and a file loaded by one plugin is among the loaded files of all. A `Config`
and a `Section` are the owner's objects: `config.sections`, `section.name`
are read there.

## For Pawn plugins

The config-core plugin gives Pawn plugins universal_config's 28
natives — `cfg_load_file`, `cfg_get_value`, `cfg_set_int` and the rest — with
the signatures of the original `universal_config.inc`, which it names as its
contract (`plugin({ include: "universal_config.inc" })`, see
natives.md), so compiled `.amxx` plugins (menu_core and others)
work against it unchanged.

Config Core replaces universal_config.amxx; Pawn plugins keep
`#include <universal_config>`. Comment universal_config.amxx out in
`plugins.ini`: two plugins cannot give the same natives.

## Where it differs from the original

The original's Pawn limits are gone: a key or a value is as long as it is
written, a section keeps every entry, blocks nest as deep as they are
written, any number of files loads. A number reads as `parseFloat` reads it
(`1e5` is 100000) and is written as the number it is (`2.5`, not
`2.500000`).
