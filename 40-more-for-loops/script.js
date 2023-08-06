// More effiecient
const items = ['book', 'chair', 'table', 'apple', 'kite', 'cat'];
// with a sort
for (const item of items.sort()) {
  console.log(item);
}

// Object array
const users = [
  {
    name: 'Paul',
    age: 12,
  },
  {
    name: 'Rory',
    age: 33,
  },
  {
    name: 'Caitlin',
    age: 22,
  },
];

// inline sort on names
for (const user of users.sort((a, b) => a.name.localeCompare(b.name))) {
  console.log(user.name);
}

// Loop over Strings
const str = 'Hello Paul';
for (letter of str) {
  console.log(letter);
}

// Loop over map
const map = new Map();
map.set('Name', 'Paul');
map.set('Age', 22);
for (const [key, value] of map) {
  console.log(key, value);
}
