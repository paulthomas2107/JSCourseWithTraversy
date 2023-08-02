var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

function registerUser(user) {
  // old skool
  if (!user) {
    user = 'Bot';
  }

  return user + ' is registered';
}

// Default params
function registerUserNew(user = 'Default', time = new Date().toUTCString()) {
  return user + ' is registered at ' + time;
}

console.log(registerUser('John'));
console.log(registerUser());
console.log(registerUserNew('Paul'));
console.log(registerUserNew());

// Rest Params - returns array of numbera
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// Objects as param
function loginUaer(user) {
  return `The user ${user.name} with id of ${user.id} is logged in.`;
}

const user = {
  id: 121766,
  name: 'thomaspa',
};

console.log(loginUaer(user));
console.log(
  loginUaer({
    id: 2,
    name: 'unknownUser',
  })
);

// Arrays as params
function getRandom(...arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandom(23, 54, 7834, 12, 38, 812));
