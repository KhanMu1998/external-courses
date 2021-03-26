function map(arr, callback) {
  const newArr = [];
  arr.forEach(function (element, index, arr) {
    newArr.push(callback(element, index, arr));
  });
  return newArr;
}
module.exports = map;
