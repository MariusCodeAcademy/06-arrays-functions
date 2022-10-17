'use strict';
console.log('loop.js');

// index          0      1         2        3
let sent1 = ['Sveiki', 'mano', 'vardas', 'James'];

for (let word of sent1) {
  // console.log(word);
}

// for (let i = 0; i < sent1.length; i++) {
//   let word = sent1[i];
//   console.log(word);
// }
console.log(' sent1 ===', sent1);
console.log('sent1[0] ===', sent1[0]);
console.log('sent1[1] ===', sent1[1]);
console.log('sent1[2] ===', sent1[2]);
console.log('sent1[3] ===', sent1[3]);

// atspausdinti is antros puses
for (let i = sent1.length - 1; i >= 0; i--) {
  let word = sent1[i];
  console.log(word);
}

// kaip is 4 gauti tris ???
