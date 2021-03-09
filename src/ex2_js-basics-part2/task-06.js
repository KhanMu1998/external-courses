function primeNumberCheck(value) {
  if (value > 1000 || value < 2) {
    console.log("Данные неверны");
    return "Данные неверны";
  }
  for (let i = 2; i < value - 1; i++) {
    if (value % i === 0) {
      console.log("Число " + value + " - составное число");
      return "Число " + value + " - составное число";
    }
  }
  console.log("Число " + value + " - простое число");
  return "Число " + value + " - простое число";
}
primeNumberCheck(13);
module.exports = primeNumberCheck;
