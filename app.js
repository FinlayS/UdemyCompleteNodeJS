console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:',  command);
console.log('YARGS:', argv);


if (command === 'add') {
    notes.addNote(argv.title, argv.body) === undefined
        ? console.log('Note', JSON.stringify(argv.title), 'not added, already exists!')
        : console.log('Note', JSON.stringify(argv.title), 'added!')
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'note was removed' : 'Note not found';
    console.log(message)
}
else {
    console.log('Command not recognised');
}