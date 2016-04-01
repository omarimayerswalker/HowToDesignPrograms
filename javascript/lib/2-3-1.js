'use strict';

function tax(grossPay) {
  const taxRate = 0.15;
  return grossPay * taxRate;
}

function netpay(hours) {
  const hourlyRate = 12;
  var gross = hours * hourlyRate;

  return gross - tax(gross);
}
