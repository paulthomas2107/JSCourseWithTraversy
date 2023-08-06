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

const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1992,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

// Quiz
// Only Retail Companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// Only started in after 1980 and ended in before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// Get companies lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(longCompanies);
