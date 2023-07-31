var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

console.log(post);

// Convert object to JSON
const str = JSON.stringify(post);
console.log(str);

// Parse JSON to Object
const obj = JSON.parse(str);
console.log(obj);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'Some extra text',
  },
];

const str2 = JSON.stringify(posts)
console.log(str2)