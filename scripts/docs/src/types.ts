// The tooltips of src/types.ts, in both languages: scripts/apply-docs.ts writes the
// one AMXTS_DOCS_LANG picks into the JSDoc above each element.
export default {
	"EntryKind": {
		en: `A \`key = value\` line, or a \`key = { ... }\` block.`,
		ru: `Строка \`key = value\` или блок \`key = { ... }\`.`,
	},
	"ContentKind": {
		en: `What a block holds: one value, a line of strings, or rows.`,
		ru: `Что хранит блок: одно значение, строку из нескольких значений или строки.`,
	},
	"Entry": {
		en: `A line of a section or a row of a block.`,
		ru: `Строка секции или строка блока.`,
	},
	"Entry.key": {
		en: `The name before \`=\`; "" for a row of a block.`,
		ru: `Имя до \`=\`; "" для строки блока.`,
	},
	"Entry.kind": {
		en: `"value" for \`key = value\`, "block" for \`key = { ... }\`.`,
		ru: `"value" для \`key = value\`, "block" для \`key = { ... }\`.`,
	},
	"Entry.content": {
		en: `What it holds: one value, a line of strings, or rows.`,
		ru: `Что хранит запись: одно значение, строку из нескольких значений или строки.`,
	},
	"Entry.values": {
		en: `Its values, in order; empty for a block of rows.`,
		ru: `Её значения по порядку; пусто для блока из строк.`,
	},
	"Entry.rows": {
		en: `A block's rows; empty otherwise.`,
		ru: `Строки блока; в остальных случаях пусто.`,
	},
	"Entry.comments": {
		en: `The comment and blank lines read before it; null for one made at run time.`,
		ru: `Комментарий и пустые строки, прочитанные перед ней; null для записи, созданной во время работы.`,
	},
	"Section": {
		en: `A [section] of a config file.`,
		ru: `[Секция] файла конфига.`,
	},
	"Section.name": {
		en: `The name between the brackets.`,
		ru: `Имя в квадратных скобках.`,
	},
	"Section.comments": {
		en: `The comment and blank lines read before it; null for one made at run time.`,
		ru: `Комментарий и пустые строки, прочитанные перед ней; null для секции, созданной во время работы.`,
	},
	"Section.entries": {
		en: `Its lines, in file order.`,
		ru: `Её строки в порядке файла.`,
	},
	"Config": {
		en: `A loaded config file.`,
		ru: `Загруженный файл конфига.`,
	},
	"Config.name": {
		en: `The name it was loaded under, ".ini" included.`,
		ru: `Имя, под которым он загружен, вместе с ".ini".`,
	},
	"Config.sections": {
		en: `In file order; a name the file has twice is there twice.`,
		ru: `В порядке файла; имя, которое встречается в файле дважды, здесь тоже дважды.`,
	},
	"SectionEntry": {
		en: `One entry of a section as \`entries()\` lists it.`,
		ru: `Одна запись секции в том виде, в каком её отдаёт \`entries()\`.`,
	},
	"SectionEntry.key": {
		en: `The name before \`=\`.`,
		ru: `Имя до \`=\`.`,
	},
	"SectionEntry.values": {
		en: `The entry's values; empty for a block.`,
		ru: `Значения записи; пусто для блока.`,
	},
	"SectionEntry.block": {
		en: `Whether it is a \`key = { ... }\` block.`,
		ru: `Блок ли это \`key = { ... }\`.`,
	},
	"SectionDump": {
		en: `What \`dump_config\` prints for one section: the heading, then its entries.`,
		ru: `То, что \`dump_config\` печатает для одной секции: заголовок, затем её записи.`,
	},
	"SectionDump.heading": {
		en: `"Section 0: NAME".`,
		ru: `Заголовок вида "Section 0: NAME".`,
	},
	"SectionDump.lines": {
		en: `Its entries, a line each.`,
		ru: `Её записи, по строке на каждую.`,
	},
	"ConfigCoreOptions": {
		en: `Config Core's options: \`configs\` in amxts.config.ts.`,
		ru: `Настройки Config Core: \`configs\` в amxts.config.ts.`,
	},
	"ConfigCoreOptions.baseDir": {
		en: `The folder under configs/ that names are loaded from: "" is configs/ itself.`,
		ru: `Папка внутри configs/, из которой загружаются файлы по имени: "" — сама configs/.`,
	},
};
