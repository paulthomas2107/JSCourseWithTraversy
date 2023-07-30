// Challenge 1
let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.reverse().push(0);
console.log(arr);

// or using unshift
arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.push(0);
arr.unshift(6);
console.log(arr);

// Challenge 2
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];
let x = arr1.concat(arr2.splice(1, 5));
console.log(x);

// or
arr1 = [1, 2, 3, 4, 5];
arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

// or
arr1 = [1, 2, 3, 4, 5];
arr2 = [5, 6, 7, 8, 9, 10];
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);
