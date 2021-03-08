function arrayEqualValues(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) return false;
  }
  return true;

  // arr.foreach(function(element, index, ar) => {
  //   if (element !== ar[index + 1]) return false;
  // });
  // return true;
}

// arr = [2, 2, 3, 2];
// console.log(arrayEqualValues(arr));

module.exports = arrayEqualValues;
