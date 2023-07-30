let x;

const name1 = 'Paul';
const age = 30;
x = 'Hello, my name is ' + name + ' and age is ' + age;
console.log(x, typeof x);

// Template Literals / Strings
x = `Hello my name is ${name1} and age is ${age}`;
console.log(x, typeof x);

// String properties and methods
const s = String('Hello Paul');
x = s.length;
console.log(x);
console.log(typeof s);

// Acces value by key
x = s[0];
console.log(x, typeof x);

x = s.__proto__;
console.log(x, typeof x);
console.log(x);

x = s.toUpperCase();
console.log(x);

x = s.toLowerCase();
console.log(x);

x = s.charAt(2);
console.log(x);

x = s.indexOf('l');
console.log(x);

x = s.substring(0, 3);
console.log(x);

x = s.substring(1, 3);
console.log(x);

x = s.substring(7);
console.log(x);

x = s.slice(-10);
console.log(x);

x = s.slice(-10, -5);
console.log(x);

x = '   Hello Paul';
console.log(x);
x = x.trim(x);
console.log(x);

x = 'Hello Paul';
x = x.replace('Hello', 'WURLD');
console.log(x);

x = 'Hello Paul';
x = s.includes('Hello');
console.log(x);
x = s.includes('ddd');
console.log(x);

x = s.valueOf()
console.log(x);
console.log(typeof s);

x = 'Part_One Part_Two Part_Three'
x = x.split(' ')
console.log(x)
x = 'Part_One/Part_Two/Part_Three';
x = x.split('/');
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
x = 'Hello World'
x = x.split('');
console.log(x)