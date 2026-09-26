# Config Core for Pawn plugins

[English](PAWN.md) | [Русский](PAWN.ru.md)

Config Core gives Pawn plugins the 28 natives of the original `universal_config.amxx` — `cfg_load_file`, `cfg_get_value`, `cfg_set_int` and the rest — with the signatures of its `universal_config.inc`, so compiled `.amxx` plugins (Menu Core's Pawn users among them) work against it unchanged.

It replaces `universal_config.amxx`: comment that one out in `plugins.ini`, since two plugins cannot give the same natives. Pawn plugins keep `#include <universal_config>`; the package ships `include/universal_config.inc`.

## Where it differs from the original

- No Pawn limits: a key or a value is as long as it is written, a section keeps every entry, blocks nest as deep as they are written, any number of files loads.
- A number reads the way `parseFloat` reads it (`1e5` is 100000) and is written as the number it is (`2.5`, not `2.500000`).
