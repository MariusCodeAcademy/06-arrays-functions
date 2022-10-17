'use strict';
console.log('inlcudesIndexOf.js');

// i            0       1         2       3       4
let spalvos = ['red', 'blue', 'green', 'blue', 'black'];

// indexOf()

let blueIndex = spalvos.indexOf('blue'); // 2
console.log('blueIndex ===', blueIndex);

let blueIndex11 = spalvos.indexOf('blue11'); // -1
console.log('blueIndex11 ===', blueIndex11);
if (blueIndex11 === -1) {
  console.log('neradau elemento');
}

// includes - ar toks el yra masyve
let blue11Includes = spalvos.includes('blue11'); // false
console.log('blue11Includes ===', blue11Includes);

let lastblueIndex = spalvos.lastIndexOf('blue');
console.log('lastblueIndex ===', lastblueIndex);
