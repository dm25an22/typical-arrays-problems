
exports.min = function min (array) {
  if (checkArray(array)) return 0; 
  return Math.min(...array);
}

exports.max = function max (array) {
  if (checkArray(array)) return 0; 
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (checkArray(array)) return 0; 
  return array.reduce((a, b) => (a + b)) / array.length;
}

function checkArray(array) {
  if (array === undefined || !array.length) {
    return true
  }
  return false;
}
