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

console.log(output);
