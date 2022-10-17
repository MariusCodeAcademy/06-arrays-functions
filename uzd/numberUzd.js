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
console.log('doubleArr ===', doubleArr);

// 22. suskaiciuoti bendra masyvo skaiciu suma

// 23. suskaiciuoti vidurki

// 24. atrinkti didziausia masyvo skaiciu
