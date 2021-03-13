function objOut(obj) {
  // console.log(obj);
  for (let key in obj) {
    console.log("Ключ: " + key + ", Значение: " + obj[key]);
  }
  return;
}

module.exports = objOut;
