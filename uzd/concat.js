'use strict';
console.log('concat.js');

// 5.
let sent1 = ['Sveiki', 'mano', 'vardas', 'James'];
let sent2 = ['. ', 'is', 'Londono'];
//    1. sujujngti masyvus i viena
let fullSentArr = sent1.concat(sent2);
console.log(fullSentArr);
// console.log(JSON.stringify(fullSentArr));

//    2. suskaicuoti kiek kieviename masyve yra elementu
console.log('sent1 ===', sent1.length);
console.log('sent2 ===', sent2.length);

//    3. is sujungto masyvo grazinti atskirame masyve  ['vardas', 'James', '. ', 'is' ]
const riekele = fullSentArr.slice(2, 6);
// const riekele = fullSentArr.slice(2, -1);
// const riekele = fullSentArr.slice(2, fullSentArr.indexOf('Londono'));
console.log('riekele ===', riekele);
console.log(fullSentArr);
