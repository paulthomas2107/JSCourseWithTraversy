// Event - when something happens !
function onClear() {
  const itemList = document.querySelector('ul');
  //itemList.innerHTML = '';
  // Or....
  // const items = itemList.querySelectorAll('li');
  //items.forEach((item) => {
  //  item.remove();
  // });

  // or while...performant recursive
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JS Event Listener
/*
const clearBtn = document.querySelector('#clear'); // #... = id
clearBtn.onclick = function () {
  alert('Hi, Paul ! - Clear Items');
};
*/

// Best way = addEventListener
const clearBtn = document.querySelector('#clear'); // #... = id
//clearBtn.addEventListener('click', () => alert('Back...clear items')); // alert blocks...
clearBtn.addEventListener('click', onClear); // Both work parenthesis required

// Remove event listener after 5 secs
//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Autoclicks after 5 seconds
//setTimeout(() => clearBtn.click(), 5000);
