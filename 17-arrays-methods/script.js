let x;

let arr = [34, 55, 95, 20, 15];

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(99); // add to start
console.log(arr);

arr.shift(); // remove from start
console.log(arr);

arr.reverse();
console.log(arr);

x = arr.includes(55); // true in array
console.log(x);

x = arr.includes(217); // false not in array
console.log(x);

x = arr.indexOf(55); // index of 3
console.log(x);

x = arr.indexOf(555); // -1 not in array
console.log(x);

x = arr.slice();
console.log(x);

x = arr.slice(1);
console.log(x);

x = arr.slice(1, 4);
console.log(x);

x = arr.slice(2, 5);
console.log(x);

x = arr.splice(); // clears array
console.log(x);

x = arr.splice(1, 4);
console.log(x);

arr = [34, 55, 95, 20, 15];
x = arr.splice(3, 1);
console.log(x, arr);

arr = [34, 55, 95, 20, 15];
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x, typeof x);
