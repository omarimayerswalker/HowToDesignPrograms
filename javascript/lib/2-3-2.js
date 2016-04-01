'use strict';

function sumCoins(pennies, nickels, dimes, quarters) {
  const penny = .01;
  const nickel = .05;
  const dime = .10;
  const quarter = .25;

  return ((penny * pennies) + (nickel * nickels) + (dime * dimes) + (quarter * quarters)).toFixed(2);
}
