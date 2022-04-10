// const path = require('path');
// const os = require('os');

// const Pathname = 'A:/Peograming/Node js/node_topic_learne/npm.js';

// console.log(path.parse(Pathname));
// console.log(os.hostname());

const fs = require('fs');

fs.writeFileSync('paragraph.txt', 'how are you all ');
fs.appendFileSync('paragraph.txt', 'my name is sohag');

fs.readFile('paragraph.txt', (error, data) => {
    console.log(data.toString());
});

console.log('this is after');
