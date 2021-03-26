function reduce(arr, callback, initialValue) {
  if (initialValue !== undefined) {
    previousValue = callback(initialValue, arr[0], 0, arr);
  } else {
    previousValue = arr[0];
  }

  for (let i = 1; i < arr.length; i++) {
    previousValue = callback(previousValue, arr[i], i, arr);
  }

  return previousValue;
}
module.exports = reduce;
