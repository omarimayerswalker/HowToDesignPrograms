'use strict';

function triangle(length, height) {
  var length = Number(length);
  var height = Number(height);
  var area = (0.5 * length * height);
  return area;
}

console.log(triangle(5, 5));
