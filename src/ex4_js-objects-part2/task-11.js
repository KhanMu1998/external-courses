function symbolCount(str) {
  let arrStr = str.split("");
  let countObj = {};

  arrStr.forEach(function (element) {
    if (isNaN(countObj[element])) {
      countObj[element] = 1;
    } else {
      countObj[element] += 1;
    }
  });
  for (var key in countObj) {
    console.log(key + ": " + countObj[key]);
  }
  //console.log(count);
}
symbolCount("приивееет");
module.exports = symbolCount;
