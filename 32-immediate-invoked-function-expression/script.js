// IIFE (Immediate Invoked Function Expressions)
// Declare and run at the same time.

// IIFE Solution

// Anonymous IFFE
(function (name) {
  const user = 'Rory from script.js';
  console.log(user);
  const hello = (name) => {
    console.log(`Hello ${name}`);
  };
  hello(user); // only allowed to be called in this function
  hello(name); // passed parm from call
})('Caitlin'); // second set of parms to invoke it (or pass parms)

// Named IFFE
(function getCheck(customer) {
  const payBill = (customer) => {
    console.log(`Hello ${customer}. You Payed.`);
  };
  payBill(customer); // only allowed to be called in this function
})('Cust:1012'); // second set of parms to invoke it (or pass parms)
