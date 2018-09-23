console.log('Starting notes.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
       return [];
    }
};


var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


var addNote = (title, body) => {
   var notes = fetchNotes();
   var note = {
      title,
       body
   };
   var duplicateNotes  = notes.filter((note) => note.title ===title);
   if (duplicateNotes.length === 0) {
       notes.push(note);
       saveNotes(notes)
       return note;
   }
}

var getAll = () => {
 console.log('Getting all notes')

};

var getNote = (title) => {
    console.log('Getting note', title);

};

var removeNote = (title) => {
    var notes = fetchNotes();
    var note = {
        title
    };
    var noteRemoved = _.remove(notes, item => item.title ===title);
    noteRemoved.length === 0
        ? console.log('Note', JSON.stringify(note.title), 'not found, not removed!!')
        : console.log('Note', JSON.stringify(note.title), 'removed!');
         saveNotes(notes)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

