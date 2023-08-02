const x = 100;

if (true) {
  const y = 200;
  console.log(x);
  console.log(x + y);
}

//console.log(x + y) //  undefined

for (let i = 0; i <= 10; i++) {
  console.log(i); // scope
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700; // available outside of block
}

// console.log(a) // not defined
// console.log(b) // not defined
console.log(c); // ok as var available outside of block

function run() {
  var d = 100; // function scopr
  console.log(d);
}

run();
//console.log(d) // not available

const foo = 1;
var barVar = 2;

console.log(window.barVar) // var added to window scope