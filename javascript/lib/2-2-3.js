'use strict';

function triangle(l, h) {
  var length = Number(l);
  var height = Number(h);
  var area = (0.5 * length * height);
  return area;
}

console.log(triangle(5, 5));
