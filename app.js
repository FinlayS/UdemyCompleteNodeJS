console.log('Starting app.js');

// from nodejs.org/api
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ =require('lodash')

// var res = notes.addNote();
// console.log(res);

// console.log(_.isString(5))
// console.log(_.isString('5'))

var tilteredArray = _.uniq(['bob', 1, 'bob', 1, 2, 3, 4])
console.log(tilteredArray)

// var notesAdd = notes.add(5, 6);
// console.log(notesAdd)
//
// console.log('Better code: ', notes.add(100, -49))

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! you are ${notes.age}`);

