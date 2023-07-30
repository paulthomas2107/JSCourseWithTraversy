const myString = 'developer';
x = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(x);

x = myString[0].toUpperCase() + myString.substring(1);
console.log(x);

// Back tick version
x = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(x);

// Back tick version with slice
x = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(x);
