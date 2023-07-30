const num = Number(5.8777);
console.log(num, typeof num);

const num2 = new Number(500);
console.log(num2, typeof num2);

let x;

x = num.toString();
console.log(x, typeof x);

x = num.toString().length;
console.log(x, typeof x);

x = num.toFixed(2);
console.log(x, typeof x);

x = num.toPrecision(2);
console.log(x, typeof x);

x = num.toExponential(1)
console.log(x, typeof x);

const num3 = Number(5);
x = num3.toLocaleString('en-US')
console.log(x, typeof x);

x = num3.toLocaleString('ar-EG');
console.log(x, typeof x);

x = num3.valueOf()
console.log(x, typeof x);

x = Number.MAX_VALUE
console.log(x, typeof x);

x = Number.MIN_VALUE;
console.log(x, typeof x);
