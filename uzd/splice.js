'use strict';
console.log('splice.js');

// 3. SPLICE (kiekvienas pokytis su nepakeistu masyvu)
// index          0      1         2        3
let sent1 = ['Sveiki', 'mano', 'vardas', 'James'];

//    3.1. istrinti 'mano'
// sent1.splice(1, 1);
// console.log('sent1 ===', sent1);
//    3.2. vietoj 'Sveiki' iterpti "Laba diena"
// sent1.splice(0, 1, 'Laba diena');
// console.log('sent1 ===', sent1);
//    3.3 tarp 'vardas' ir 'James' iterpti 'yra'
sent1.splice(3, 0, 'yra');
console.log('sent1 ===', sent1);
