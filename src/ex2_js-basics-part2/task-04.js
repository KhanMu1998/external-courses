function arrayEqualValues(arr) {
  let res = true;

  arr.forEach((element) => {
    if (element !== arr[0]) res = false;
  });

  return res;
}

// arr = [2, 2, 2, 2];
// console.log(arrayEqualValues(arr));

module.exports = arrayEqualValues;
