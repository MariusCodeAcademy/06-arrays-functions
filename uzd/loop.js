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
// console.log(' sent1 ===', sent1);
// console.log('sent1[0] ===', sent1[0]);
// console.log('sent1[1] ===', sent1[1]);
// console.log('sent1[2] ===', sent1[2]);
// console.log('sent1[3] ===', sent1[3]);

// atspausdinti is antros puses
for (let i = sent1.length - 1; i >= 0; i--) {
  let word = sent1[i];
  // console.log(word);
}

// kaip is 4 gauti tris ???

// 15. Atrinkti kas penktą elementą
let numbersArr = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];

for (let i = 0; i < numbersArr.length; i += 5) {
  // const element = numbersArr[i];
  // console.log('element ===', element);
}
let i = 0;
for (const element of numbersArr) {
  if (i % 5 === 0) console.log('element ===', element);
  i++;
}
