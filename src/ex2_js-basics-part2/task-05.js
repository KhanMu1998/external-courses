function arrayMaxValue(arr) {
  let max = arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
module.exports = arrayMaxValue;
