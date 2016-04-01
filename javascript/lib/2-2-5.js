'use strict';

function formula1(n) {
  return (n * n) + 10;
}

let result1 = formula1(2);
let result2 = formula1(5);
let result3 = formula1(9);

function formula2(n) {
  return (1/2 * (n * n)) + 20;
}

let result4 = formula2(2);
let result5 = formula2(5);
let result6 = formula2(9);

function formula3(n) {
  return (2 - (1/n)).toFixed(2);
}

let result7 = formula3(2);
let result8 = formula3(5);
let result9 = formula3(9);
