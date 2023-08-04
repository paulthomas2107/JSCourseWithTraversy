// LIFO = (L)ast (I)n (F)irst (O)ut

function first() {
  console.log(arguments.callee.name); // name of function being executed
  second();
}
function second() {
  console.log(arguments.callee.name);
  third();
}
function third() {
  console.log(arguments.callee.name);
}

first();
