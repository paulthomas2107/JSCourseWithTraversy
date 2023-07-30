let d;

// Dates
d = new Date();
console.log(d, typeof d);

d = d.toString();
console.log(d, typeof d);

//
d = new Date(2021, 0, 10, 12, 30, 0);
console.log(d, typeof d);

d = new Date('2021-07-10T14:13:12');
console.log(d, typeof d);

d = new Date('07/10/2021 14:13:12');
console.log(d, typeof d);

d = new Date('2022-07-10');
console.log(d, typeof d);

d = new Date('07-10-2022');
console.log(d, typeof d);

// Timestamps
d = Date.now(); // milliseconds
console.log(d, typeof d);

d = new Date('07-10-2022 11:11');
d = d.getTime();
console.log(d, typeof d);
d = d.valueOf();
console.log(d, typeof d);

d = new Date(1690731234723);
console.log(d, typeof d);

d = Math.floor(Date.now() / 1000); // seconds conversion    
console.log(d, typeof d);
