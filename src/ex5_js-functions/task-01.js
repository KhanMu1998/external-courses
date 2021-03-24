let Calculator = {
  result: 0,

  reset() {
    Calculator.result = 0;
    return Calculator.result;
  },

  getResult() {
    return Calculator.result;
  },

  add(value) {
    if (value === undefined) return Calculator.result;
    Calculator.result += value;
    return Calculator.result;
  },

  subtract(value) {
    if (value === undefined) return Calculator.result;
    Calculator.result -= value;
    return Calculator.result;
  },

  divide(value) {
    if (value === undefined) return Calculator.result;

    if ((value === 0) | (value === Infinity)) {
      console.log("Недопустимая операция");
      return Calculator.result;
    }

    Calculator.result /= value;
    return Calculator.result;
  },

  multiply(value) {
    if (value === undefined) return Calculator.result;
    Calculator.result *= value;
    return Calculator.result;
  },
};

module.exports = Calculator;
