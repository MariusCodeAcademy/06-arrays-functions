'use strict';
console.log('numberUzd.js');

let numbersArr = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];

// kur issaugosim dvigubas reiksmes
const doubleArr = [];
for (let i = 0; i < numbersArr.length; i++) {
  // sukuriam kintamaji kiekvienan el is masyvo
  let nr = numbersArr[i];
  // padvigubinam reiksme ir issaugom double kint
  let double = nr * 2;
  // console.log(double);
  doubleArr.push(double);
}
// console.log('doubleArr ===', doubleArr);

// 22. suskaiciuoti bendra masyvo skaiciu suma
let total = 0;
// ciklas paimantis kkiekviena reiksme masyve
for (let i = 0; i < numbersArr.length; i++) {
  let skaicius = numbersArr[i];
  // console.log('skaicius ===', skaicius);
  total = total + skaicius;
  // total += skaicius
}
console.log('total ===', total);

// 23. suskaiciuoti vidurki
const avg = total / numbersArr.length;
console.log('avg ===', +avg.toFixed(2));

// 24. atrinkti didziausia masyvo skaiciu

numbersArr = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
// 6. Atrinkti tiktai teigimų elementų masyvą

const teigiamiSkArr = [];
/* psiaudo kodas
1. tuscias masyvas sudeti teigiamus
2. ciklas per numbersArr
3. ciklo metu tikrinti ar sk > 0 
4. jei taip, tai mes tada is karto, nedelsdami ispausdinam
*/
for (let i = 0; i < numbersArr.length; i++) {
  let sk = numbersArr[i];
  if (sk > 0) {
    // sk teigiamas
    // console.log(sk);
    // teigiamiSkArr.push(sk);
    // dedam elementus i masyvo prieki
    teigiamiSkArr.unshift(sk);
  }
}
console.log('teigiamiSkArr ===', teigiamiSkArr);
