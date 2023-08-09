let output;

output = document.all;
output = document.all[11];
output = document.all.length;
output = document.documentElement;
output = document.head;
output = document.body;
output = document.head.children; // children of specific portion
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet; // UTF-8
output = document.contentType; // text/html

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method; // get (unless set), post etc
output = document.forms[0].action;

//document.forms[0].id = 'new-id';
/* output = document.links[0].href = 'https://facebook.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList;
 */
output = document.images;
output = document.images[0];
output = document.images[0].src;

Array.from(document.forms).forEach((form) => {
  console.log(form);
});

console.log(output);

// DOM Selectors - Single Elements
// ================================

console.log(document.getElementById('item-form'));
console.log(document.getElementById('item-form').id);
console.log(document.getElementById('item-form').getAttribute('id'));

// Set attributes
document.getElementById('item-form').title = 'Paul Shopping List';
document.getElementById('item-form').setAttribute('class', 'title');
const title = document.getElementById('item-form');
console.log(title);

// Get / change title
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello !';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles CSS
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// Document query selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#item-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Ribena';
secondItem.style.color = 'green';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';

// DOM Selecting multiple items
