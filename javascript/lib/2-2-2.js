'use strict';

function dollarToEuro(amount) {
  var dollar = Number(amount);
  var euro = dollar * 0.92;
  return Number(euro.toFixed(2));
}

console.log(dollarToEuro(1));
