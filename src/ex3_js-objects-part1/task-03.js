let bike = {
  wheels: "round",
  wheelSize: 27,
  thirdWheel: false,
};

// function objKeyCheck(keyToCheck, obj) {
//   for (let key in obj) {
//     if (key === keyToCheck) {
//       console.log("Ключ: " + key + ", Значение: " + obj[key]);
//       return true;
//     }
//   }
//   return false;
// }

function objKeyCheck(keyToCheck, obj) {
  return keyToCheck in obj;
}

console.log(objKeyCheck("wheelSize", bike));

module.exports = objKeyCheck;
