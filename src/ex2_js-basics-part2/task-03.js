function arrayOddEvenCount(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  arr.foreach((element) => {
    if (element === undefined || element === null) {
      return;
    }
    if (element === 0) zeroCount += 1;
    else if (element % 2 === 0) evenCount += 1;
    else if (element % 2 === 1) oddCount += 1;
  });

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
