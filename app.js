console.log('Starting app.js');

// from nodejs.org/api
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

// var res = notes.addNote();
// console.log(res);

var notesAdd = notes.add(5, 6);
console.log(notesAdd)

console.log('Better code: ', notes.add(100, -49))

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! you are ${notes.age}`);

