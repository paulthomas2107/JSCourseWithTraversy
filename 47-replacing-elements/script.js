function replaceFirstItem() {
  const firstIitem = document.querySelector('li:first-child');
  const li = document.createElement('li');
  li.textContent = 'Replaced First';
  firstIitem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced Second</li>';
}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');
  lis.forEach((item, index) => {
    //item.outerHTML = `<li>Replace all - Item ${index + 1}</li>`;
    item.innerHTML = `Replace all - Item ${index + 1}...`;
  });
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
