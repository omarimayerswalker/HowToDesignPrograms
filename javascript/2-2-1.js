'use strict';

function convert(f) {
  var fahr = Number(f);
  var cels = (fahr - 32) * 5/9;
  return cels;
}

console.log(convert(1));
