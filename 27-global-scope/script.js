var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

// Global Scope
const x = 100;
console.log(x, 'In Global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'In function');
}

run();

if (true) {
  console.log(x, 'In Block');
}

function add() {
    const y = 50; // function scoped
    console.log(y)
    console.log(x + y)
}

add()
// console.log(y) // undefined

