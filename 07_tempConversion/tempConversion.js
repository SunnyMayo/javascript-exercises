const convertToCelsius = function(fahr) {
  let temp = (fahr - 32) * 5 / 9;
  let celsius = Math.round(temp * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(cels) {
  let temp = (cels * 9 / 5 ) + 32;
  let fahrenheit = Math.round(temp * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
