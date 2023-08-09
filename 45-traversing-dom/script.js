// Get child from parent
let output;

const parent = document.querySelector('.parent');
output = parent.children;
console.dir(parent.children[1]);

output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV etc

parent.children[1].innerText = 'Child TWO';
parent.children[1].style.color = 'green';

// First
parent.firstElementChild.innerText = 'Child One';
//Last
parent.lastElementChild.innerText = 'Child THREE';
parent.lastElementChild.style.background = 'red';

// Get Parent from child
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);

// Child Nodes
let output2;
const parent2 = document.querySelector('.parent');
output2 = parent2.childNodes;
output2 = parent2.childNodes[0].textContent;
output2 = parent2.childNodes[0].nodeName;
output2 = parent2.childNodes[3].nodeName;
output2 = parent2.childNodes[3].textContent;
output2 = parent2.childNodes[3].outerHTML;
output2 = parent2.childNodes[3].innerText = 'Child ONE *';
output2 = parent2.childNodes[5].style.color = 'purple';
output2 = parent.firstChild;
output2 = parent.lastChild;
output2 = parent.lastChild.textContent = 'Hello';
console.log(output2);

// Parent node from child
const child2 = document.querySelector('.child');
output = child2.parentNode;
output = child2.parentElement;
child2.parentNode.style.backgroundColor = '#ccc'; // grey
child2.parentNode.style.padding = '10px';
console.log(output);

// Siblings
const item2 = document.querySelector('.child:nth-child(2');
output = item2.nextSibling;
output = item2.previousSibling;
console.log(output);
