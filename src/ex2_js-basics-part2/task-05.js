function arrayMaxValue(arr) {
  return arr.reduce(function (max, current) {
    if (max < current) return current;
    return max;
  }, arr[0]);
}
module.exports = arrayMaxValue;
