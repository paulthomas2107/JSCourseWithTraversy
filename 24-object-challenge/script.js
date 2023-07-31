var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

// 1. Build object
const library = [
  {
    id: 1,
    title: 'Title1',
    author: 'Author1',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    id: 2,
    title: 'Title2',
    author: 'Author2',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    id: 3,
    title: 'Title3',
    author: 'Author3',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// 2. Set Status
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// 3. Rename Item
let x = library[0].title;   
delete library[0].title;
library[0].firstBook = x;
console.log(library);

// or
const {title: firstBook} = library[0]

// 4. Convert to JSON
const str = JSON.stringify(library);
console.log(str);