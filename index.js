const yargs = require("yargs");
const chalk = require("chalk");
const { addNote, printNotes, removeNote } = require("./notes.controller");

yargs.command({
    command: "add",
    discribe: "Add new note to the list",
    builder: {
        title: {
            type: "string",
            discribe: "Node title",
            demandOption: true,
        },
    },
    handler({ title }) {
        addNote(title);
    },
});

yargs.command({
    command: "list",
    discribe: "Print all notes",
    async handler() {
        const notes = await printNotes();
        console.log(notes);
    },
});

yargs.command({
    command: "remove",
    discribe: "Remove note by id",
    handler(id) {
        removeNote(id);
    },
});

yargs.parse();
