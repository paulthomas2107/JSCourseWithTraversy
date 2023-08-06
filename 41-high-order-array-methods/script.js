const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'purple',
};

// Get key and object based on key
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// With Array
const colorArray = ['yellow', 'gray', 'purple', 'rose'];
for (const key in colorArray) {
  console.log(colorArray[key]);
}

// High order array methods
// For each
const socials = ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'];
console.log(socials.__proto__);
socials.forEach(function (item) {
  console.log(item);
});

// Simpler
socials.forEach((item) => console.log(item));

// With index, arr
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Named function
function logSocials(social) {
  console.log(social);
}
socials.forEach(logSocials); // just definition not with parms or brackets

const socialObjs = [
  {
    name: 'Twitter',
    url: 'www.twitter.com',
  },
  {
    name: 'Facebook',
    url: 'www.facebook.com',
  },
  {
    name: 'Instragram',
    url: 'www.instagram.com',
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com',
  },
];

socialObjs.forEach((item) => console.log(item.url));

// Array Filter
const carMan = [
  'Ford',
  'VW',
  'Porsche',
  'Tesla',
  'Nissan',
  'Mercedes',
  'Fiat',
  'Dodge',
];

var result = carMan.filter((word) => word.startsWith('F'));
console.log(result);

result = carMan.filter((word) => word.length > 6);
console.log(result);

// With inline function
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);

// Short version
evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// With foreach
evenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log('...' + evenNumbers);

co