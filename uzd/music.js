'use strict';
console.log('music.js');

// 1. Pabandykime atlikti 5 masyvo (Array) operacijas.

// 2. Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
let music = ['Jazz', 'Blues'];
console.log('music ===', music);

// 3. Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
music.push('Rock-n-Roll');
console.log('music ===', music);

// 4. Viduryje esančią reikšmę pakeiskite „Classics“.
music[1] = 'Classics';
console.log('music ===', music);

// 5. Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
let istrintasPirmas = music.shift();
console.log('istrintasPirmas ===', istrintasPirmas);
console.log('music ===', music);
// alert(istrintasPirmas);
// document.getElementById('title').textContent = istrintasPirmas;

// 6. Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.
music.unshift('Rap', 'Reggae');
// music.splice(0, 0, 'Rap', 'Reggae'); // same effect
console.log('music ===', music);

let randomArr = [11, 'cat', true, 4, 'mouse', 5, [], 5, 76, false];

// atspausdinti kiekvieno masyvo tipa consoleje
console.log('===================================================');
let randomArrTypes = [];
for (let randomEl of randomArr) {
  // console.log(typeof randomEl);
  // console.log(Array.isArray(randomEl));
  randomArrTypes.push(typeof randomEl);
  // atrinkti tik string tipo elementus
  // if (typeof randomEl === 'string') {
  //   randomArrTypes.push(randomEl);
  // }
}

console.log('randomArrTypes ===>', randomArrTypes);
// suzinoti ar elementas yra masyvas
// Array.isArray()
