let bike = {
  wheels: "round",
  wheelSize: 27,
  thirdWheel: false,
};

function objOut(obj) {
  // console.log(obj);
  for (let key in obj) {
    if (obj) {
      console.log("Ключ: " + key + ", Значение: " + obj[key]);
    }
  }
  return;
}

objOut(bike);

module.exports = objOut;
