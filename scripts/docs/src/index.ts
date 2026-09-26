// The tooltips of src/index.ts, in both languages: scripts/apply-docs.ts writes the
// one AMXTS_DOCS_LANG picks into the JSDoc above each element.
export default {
	setBaseDir: {
		en: `Sets the folder under configs/ that file names are relative to, e.g. "myserver"; "" is configs/ itself.`,
		ru: `Задаёт папку внутри configs/, от которой считаются имена файлов, например "myserver"; "" — сама configs/.`,
	},
	load: {
		en: `
			Loads \`configs/<baseDir>/<name>\`; ".ini" is added when the name has none.
			A file that is not there loads empty, for a plugin to fill and save.
		`,
		ru: `
			Загружает \`configs/<baseDir>/<name>\`; ".ini" добавляется, если в имени его нет.
			Файла нет — конфиг загружается пустым, чтобы плагин его заполнил и сохранил.
		`,
	},
	section: {
		en: `A section of a config by its name - the last one, when the file has two.`,
		ru: `Секция конфига по имени — последняя, если в файле их две.`,
	},
	createSection: {
		en: `The section, made when the config does not have it.`,
		ru: `Секция; если её в конфиге нет, она создаётся.`,
	},
	save: {
		en: `
			Writes every section of a config to \`configs/<baseDir>/<name>\`, with the
			comments and blank lines it was read with. A section or an entry made at
			run time gets a blank line before it.
		`,
		ru: `
			Записывает все секции конфига в \`configs/<baseDir>/<name>\` вместе с
			комментариями и пустыми строками, с которыми он был прочитан. Перед секцией
			или записью, созданной во время работы, ставится пустая строка.
		`,
	},
	writeSection: {
		en: `Writes one section alone to \`configs/<baseDir>/<name>\`; \`save()\` writes them all.`,
		ru: `Записывает одну секцию в \`configs/<baseDir>/<name>\`; \`save()\` пишет все.`,
	},
	dump: {
		en: `A dump of every loaded config - each section with its entries, as \`dump_config\` prints them.`,
		ru: `Дамп всех загруженных конфигов — каждая секция с записями, как их печатает \`dump_config\`.`,
	},
	getValue: {
		en: `The \`index\`-th value of a key's line, without its quotes; null when there is none. A key with "/" is a path.`,
		ru: `Значение номер \`index\` в строке ключа, без кавычек; null, если его нет. Ключ с "/" — путь.`,
	},
	getValueByPath: {
		en: `
			A value by a path, \`line\` a row of its block. With the key in the section
			more than once and no line asked for, \`index\` picks which one - and, as in
			the original, still picks the value in it.
		`,
		ru: `
			Значение по пути, \`line\` — строка его блока. Если ключ встречается в секции
			несколько раз и строка не указана, \`index\` выбирает, какой из них, — и, как
			в оригинале, заодно выбирает значение в нём.
		`,
	},
	getInt: {
		en: `A whole number; 0 when there is none.`,
		ru: `Целое число; 0, если его нет.`,
	},
	getNumber: {
		en: `A number; 0 when there is none.`,
		ru: `Число; 0, если его нет.`,
	},
	getBoolean: {
		en: `A value as a boolean: true for a whole number other than 0, e.g. "1" or "2"; false for anything else, "true" included.`,
		ru: `Значение как булево: true для целого числа, отличного от 0, например "1" или "2"; false для всего остального, включая "true".`,
	},
	getWords: {
		en: `
			The words of a key's line - of its \`index\`-th line when the key is there
			more than once. For a block, every value of every row. Null when there is
			no such key or nothing in it.
		`,
		ru: `
			Слова строки ключа — строки номер \`index\`, если ключ встречается несколько
			раз. Для блока — все значения всех его строк. null, если такого ключа нет
			или в нём пусто.
		`,
	},
	getNumbers: {
		en: `The numbers in the value \`index\` - "1.0 2.0 3.0" is three; null when there is no value.`,
		ru: `Числа в значении \`index\` — в "1.0 2.0 3.0" их три; null, если значения нет.`,
	},
	getValues: {
		en: `Every value of the line a path leads to, quotes and all; [] for an empty line, null for none.`,
		ru: `Все значения строки, к которой ведёт путь, вместе с кавычками; [] для пустой строки, null, если её нет.`,
	},
	keys: {
		en: `The section's keys, in file order.`,
		ru: `Ключи секции в порядке файла.`,
	},
	entries: {
		en: `Every entry: its key, and its values when it is a line.`,
		ru: `Все записи: ключ и, если это строка, её значения.`,
	},
	size: {
		en: `
			The number of values in a line, of rows in a block, or - for a key that is
			there more than once - of times it is there. A path counts what it leads to.
		`,
		ru: `
			Число значений в строке, строк в блоке или — для ключа, который
			встречается несколько раз, — число его повторов. Путь считает то, к чему
			ведёт.
		`,
	},
	has: {
		en: `Whether the section has the key. A key with "/" is not a path here.`,
		ru: `Есть ли в секции такой ключ. Ключ с "/" здесь не путь.`,
	},
	set: {
		en: `
			Sets a value. A key that is not there is made; a value past the end of its
			line is added with empty ones before it. For a block, \`line\` is the row -
			made, with the rows before it, when missing. A path makes the blocks on its
			way.
		`,
		ru: `
			Задаёт значение. Ключ, которого нет, создаётся; значение за концом строки
			добавляется, а перед ним — пустые. Для блока \`line\` — строка блока; если
			её нет, она создаётся вместе с предыдущими. Путь создаёт блоки, через
			которые проходит.
		`,
	},
	setInt: {
		en: `Sets a whole number; the fraction is dropped: 2.7 is written as 2.`,
		ru: `Задаёт целое число; дробная часть отбрасывается: 2.7 пишется как 2.`,
	},
	setNumber: {
		en: `Sets a number, written as is: 2.5, not 2.500000.`,
		ru: `Задаёт число, оно пишется как есть: 2.5, а не 2.500000.`,
	},
	setBoolean: {
		en: `Written as 1 or 0.`,
		ru: `Пишется как 1 или 0.`,
	},
	remove: {
		en: `Removes every entry of the key; false when there was none.`,
		ru: `Удаляет все записи ключа; false, если их не было.`,
	},
	setKind: {
		en: `
			Makes the key a line of values or a block, emptying it when it changes; a
			key that is not there is made. Turning it into a block drops the other
			entries of the key.
		`,
		ru: `
			Делает ключ строкой значений или блоком и очищает его, если вид меняется;
			ключ, которого нет, создаётся. При превращении в блок остальные записи
			этого ключа удаляются.
		`,
	},
	setContent: {
		en: `Says what the key holds; between rows and text it is emptied. A key that is not there is made.`,
		ru: `Задаёт, что хранит ключ; при переходе между строками и текстом он очищается. Ключ, которого нет, создаётся.`,
	},
	setRowComment: {
		en: `The comment written before row \`row\` of the block \`key\`; "" removes it. False when there is no such row.`,
		ru: `Комментарий, который пишется перед строкой \`row\` блока \`key\`; "" его убирает. false, если такой строки нет.`,
	},
	configHandle: {
		en: `A config's handle for Pawn plugins: its number among the loaded ones; -1 for none.`,
		ru: `Дескриптор конфига для Pawn-плагина: его номер среди загруженных; -1, если конфига нет.`,
	},
	configByHandle: {
		en: `The config a Pawn plugin's handle stands for; null for none.`,
		ru: `Конфиг по дескриптору Pawn-плагина; null, если такого нет.`,
	},
	sectionHandle: {
		en: `A section's handle for Pawn plugins: its number among every loaded one; -1 for none.`,
		ru: `Дескриптор секции для Pawn-плагина: её номер среди всех загруженных; -1, если секции нет.`,
	},
	sectionByHandle: {
		en: `The section a Pawn plugin's handle stands for; null for none.`,
		ru: `Секция по дескриптору Pawn-плагина; null, если такой нет.`,
	},
	findSection: {
		en: `A section of that name in any config: the last one loaded.`,
		ru: `Секция с таким именем в любом конфиге: последняя из загруженных.`,
	},
	allSections: {
		en: `Every section of every config, in the order they were loaded.`,
		ru: `Все секции всех конфигов в порядке загрузки.`,
	},
};
