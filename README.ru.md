<div align="center">

# Config Core

*INI-конфиги: секции, типизированные значения, пути внутрь блоков*

[![amxts module](https://img.shields.io/badge/amxts-module-3178c6?style=flat-square)](https://amxts.github.io/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

[Возможности](#возможности) • [Установка](#установка) • [Использование](#использование) • [Формат файла](#формат-файла) • [Pawn-плагины](#pawn-плагины)

[English](README.md) | **Русский**

</div>

Прочитайте INI-файл в память, достаньте из него значения нужного типа, измените их и запишите файл обратно — с комментариями и пустыми строками на своих местах.

## Возможности

- **Значения нужного типа.** Текст, целые числа, дробные, логические, списки слов или чисел.
- **Пути внутрь блоков.** `HUD/HIDE_TIME` достаёт ключ из блока `HUD = { ... }`, на любой глубине вложенности.
- **Записывает то, что прочитал.** Комментарии и пустые строки переживают сохранение; отсутствующий файл загружается пустым, чтобы его заполнить.
- **Создаёт недостающее.** Запись ключа добавляет сам ключ, строки блока до нужной и блоки на пути.
- **Один экземпляр на сервер.** Все плагины, на TypeScript и на Pawn, видят одни и те же загруженные файлы и одну базовую папку.
- **Без ограничений Pawn.** Ключи и значения любой длины, сколько угодно записей, блоков и файлов.

## Установка

```bash
npm install @amxts/config-core
```

Добавьте его в `amxts.config.ts` проекта:

```ts
export default defineConfig({
	modules: ["@amxts/config-core"],
	configs: {
		baseDir: "myserver",   // имена файлов читаются из configs/myserver/
	},
});
```

| Опция | По умолчанию | Что делает |
| --- | --- | --- |
| `baseDir` | `""` | Папка в `configs/`, из которой читаются файлы; `""` — сама `configs/`. |

Модуль, который читает свои файлы через Config Core, например [Menu Core](https://github.com/amxts/menu-core), подключает его сам — добавлять ничего не нужно.

## Использование

```ts
import * as ini from "@amxts/config-core";

const config = ini.load("settings");               // configs/myserver/settings.ini
const main = ini.section(config, "MAIN");

if (main) {
	const prefix = ini.getValue(main, "CHAT_PREFIX");   // string | null
	const hideTime = ini.getInt(main, "HUD/HIDE_TIME");  // ключ внутри блока HUD
	const roundTime = ini.getNumber(main, "ROUND_TIME");
	const maps = ini.getWords(main, "MAPS");             // string[] | null

	ini.set(main, "CHAT_PREFIX", "[HNS]");
	ini.setNumber(main, "ROUND_TIME", 2.5);
	ini.save(config, "settings");
}
```

- Ключ ищется без учёта регистра; ключ с `/` — путь внутрь блоков.
- `index` выбирает значение в строке из нескольких: в `HIDE_TIME = 255 50 50` это 0, 1 и 2.
- `line` выбирает строку блока: `ini.getValueByPath(main, "CVARS", 1, 3)` — значение 1 из строки 3.
- Число читается так, как его читает `parseFloat` (`1e5` — это 100000), и записывается как есть (`2.5`).

### API

| Функция | Что делает |
| --- | --- |
| `load(name)` | Загружает файл, `.ini` добавляется сам; отсутствующий файл загружается пустым. |
| `section(config, name)` · `createSection(config, name)` | Секция по имени или `null`; новая секция. |
| `getValue` · `getInt` · `getNumber` · `getBoolean` | Одно значение ключа нужного типа. |
| `getWords` · `getNumbers` · `getValues` · `getValueByPath` | Строка из нескольких значений, строка блока, значение по пути. |
| `set` · `setInt` · `setNumber` · `setBoolean` | Меняет значение и создаёт недостающее; `false`, где это невозможно (путь через простое значение). |
| `has` · `keys` · `entries` · `size` · `remove` | Что лежит в секции. |
| `save(config, name)` | Записывает файл обратно вместе с комментариями. |

## Формат файла

```ini
; комментарий остаётся на своём месте
[MAIN]
CHAT_PREFIX = [MYPLUGIN]
ROUND_TIME = 2.5
MAPS = de_dust2 de_inferno de_nuke

HUD = {
	HIDE_TIME = 255 50 50
}

CVARS = {
	"mp_timelimit" "30"
	"mp_freezetime" "3"
}
```

- `[SECTION]` начинает секцию; имя может повторяться, `section()` отдаёт последнюю.
- `key = value` — строка; несколько значений разделяются пробелами, значение с пробелом берётся в кавычки.
- `key = { ... }` — блок: строки значений или свои строки `key = value`, с любой глубиной вложенности.

## Pawn-плагины

Существующие Pawn-плагины продолжают работать: Config Core отдаёт 28 нативов `cfg_*` оригинального `universal_config.amxx` с теми же сигнатурами, а Pawn-плагины оставляют `#include <universal_config>`. Замените им `universal_config.amxx` в `plugins.ini`. Подробности и отличия от оригинала — в [PAWN.ru.md](PAWN.ru.md).
