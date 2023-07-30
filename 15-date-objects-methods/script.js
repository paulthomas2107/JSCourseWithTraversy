let x;

let d = new Date();
console.log(d, typeof d);

x = d.toString();
console.log(x, typeof x);

x = d.getTime();
console.log(x, typeof x);

x = d.valueOf();
console.log(x, typeof x);

x = d.getFullYear();
console.log(x, typeof x);

x = d.getMonth(); // 6 is July etc
console.log(x, typeof x);

x = d.getDate(); // Date of Month
console.log(x, typeof x);

x = d.getDay(); // Day of week 0 is Sunday
console.log(x, typeof x);

x = d.getHours();
console.log(x, typeof x);

x = d.getMinutes();
console.log(x, typeof x);

x = d.getSeconds();
console.log(x, typeof x);

x = d.getMilliseconds();
console.log(x, typeof x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x, typeof x);

// Using Intl (UK Format)
x = Intl.DateTimeFormat('en-UK').format(d);
console.log(x, typeof x);

x = Intl.DateTimeFormat('en-US').format(d);
console.log(x, typeof x);

x = Intl.DateTimeFormat('default').format(d);
console.log(x, typeof x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(x, typeof x);

x = d.toLocaleString('default', { month: 'short' });
console.log(x, typeof x);

// Good way - location specific
x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Europe/London',
});
console.log(x, typeof x);
