let Calculator = {
  result: 0,

  reset: function () {
    this.result = 0;
    return this.result;
  },
  getResult: function () {
    return this.result;
  },

  add: function (value) {
    this.result += value;
    return this.result;
  },
  subtract: function (value) {
    this.result -= value;
    return this.result;
  },
  divide: function (value) {
    this.result /= value;
    return this.result;
  },
  multiply: function (value) {
    this.result *= value;
    return this.result;
  },
};

module.exports = Calculator;
