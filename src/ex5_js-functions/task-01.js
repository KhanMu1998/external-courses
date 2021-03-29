let Calculator = {
  result: 0,

  reset() {
    Calculator.result = 0;
    return Calculator.getResult;
  },

  getResult() {
    console.log(Calculator.result);
    return Calculator.getResult;
  },

  add(value) {
    if (value === undefined) return Calculator.add;
    Calculator.result += value;
    return Calculator.add;
  },

  subtract(value) {
    if (value === undefined) return Calculator.subtract;
    Calculator.result -= value;
    return Calculator.subtract;
  },

  divide(value) {
    if (value === undefined) return Calculator.divide;

    if ((value === 0) | (value === Infinity)) {
      console.log("Недопустимая операция");
      return Calculator.divide;
    }

    Calculator.result /= value;
    return Calculator.divide;
  },

  multiply(value) {
    if (value === undefined) return Calculator.multiply;
    Calculator.result *= value;
    return Calculator.multiply;
  },
};

module.exports = Calculator;
