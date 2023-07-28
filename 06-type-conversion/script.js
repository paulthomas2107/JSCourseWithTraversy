let amount = '100';
console.log(amount, typeof amount);

amount = parseInt(amount);
console.log(amount, typeof amount);

let amount2 = '102';
amount = +amount2; // converts string to number
console.log(amount, typeof amount);

amount = Number('aaa'); // converts string to number
console.log(amount, typeof amount);

amount = Number(amount2);
console.log(amount, typeof amount);

// Change number to Strimg
amount = 200;
amount = amount.toString();
console.log(amount, typeof amount);

amount = 200;
console.log(amount, typeof amount);
amount = String(amount);
console.log(amount, typeof amount);

// Change to decimal
amount = '99.5';
console.log(amount, typeof amount);
amount = parseFloat(amount);
console.log(amount, typeof amount);

// convert number to boolean
amount = 1;
amount = Boolean(amount);
console.log(amount, typeof amount);
amount = 0; // always false
amount = Boolean(amount);
console.log(amount, typeof amount);
amount = 2;
amount = Boolean(amount);
console.log(amount, typeof amount);
amount = -0; // false
amount = Boolean(amount);
console.log(amount, typeof amount);

// NaN
amount = 'hello'
amount = parseInt(amount)
console.log(amount, typeof amount);

