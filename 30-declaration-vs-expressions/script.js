// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(123.45));

// Function expression
const addPlusSign = (value) => {
  return '+' + value;
};

console.log(addPlusSign(222.33))