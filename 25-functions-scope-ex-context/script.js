var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

function sayHello() {
  console.log('Hello, Paul');
}
sayHello();

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 5));

function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(10, 9));
const x1 = subtract(20, 29);
console.log(x1);


