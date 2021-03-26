function slice(arr, begin = 0, end = arr.length) {
  const newArr = [];
  const newBegin = begin >= 0 ? begin : arr.length + begin;
  const newEnd = end >= 0 ? end : arr.length + end;

  arr.forEach(function (element, index) {
    if ((index >= newBegin) & (index < newEnd)) {
      newArr.push(element);
    }
  });
  return newArr;
}

module.exports = slice;
