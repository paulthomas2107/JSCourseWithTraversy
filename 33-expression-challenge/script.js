// Challenge 1
function getCelcius(tempInFahrenheit) {
  return ((tempInFahrenheit - 32) * 5) / 9;
}
console.log(`The temperature in Celcius is ${getCelcius(111.11)}\xB0c`);

// or
const getCelciusQuick = (tempInFahrenheit) => ((tempInFahrenheit - 32) * 5) / 9;
console.log(`The temperature in Celcius is ${getCelciusQuick(31)}\xB0c`);

// Challnge 2
const numberArray = [8, 10, 12, 16, 3, 2, 888, 9000];
const getMinMax = (array) => {
  return {
    MIN: Math.min(...array),
    MAX: Math.max(...array),
  };
};
console.log(getMinMax(numberArray));

// Challenge 3
(function getRecArea(recLength, recWidth) {
  console.log(
    `The area of a rectangle with a length of ${recLength} and a width of ${recWidth} is ${
      recLength * recWidth
    }.`
  );
})(20, 30);
