function arrayOddEvenCount(arr) {
  let evenCount = 0,
    oddCount = 0,
    zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] !== undefined) & (arr[i] !== null)) {
      if (arr[i] === 0) zeroCount++;
      else if (arr[i] % 2 === 0) evenCount++;
      else if (arr[i] % 2 === 1) oddCount++;
    }
  }
  let arrayCounted = [evenCount, oddCount, zeroCount];

  let outputResult = "четных: " + evenCount + "; нечетных: " + oddCount;
  if (zeroCount > 0) {
    outputResult += "; нулей: " + zeroCount;
  }
  console.log(outputResult);

  return arrayCounted;
}
arrayOddEvenCount([1, 2, null, 0]);
module.exports = arrayOddEvenCount;
