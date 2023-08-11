const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

//div.innerText = 'Hello Paul !'
const text = document.createTextNode('Hello Paul !!');
//div.appendChild(text);

//document.body.appendChild(div)
document.querySelector('ul').appendChild(div);

// Quick and Dirty
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item} 
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  document.querySelector('.items').appendChild(li);
}

// Clean and Performant
function createNewItem(item) {
  // Create items
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);
  // Add to panel
  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createListItem('Mars Bar');
createNewItem('Ribs');

// Insert elements, text and HTML

// InsertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');
  const h1 = document.createElement('h1');
  h1.textContent = 'InsertAdjacentElement';
  filter.insertAdjacentElement('beforeBegin', h1);
}

// InsertAdjacentText Example

// InsertAdjacentHTML Example

// InsertBefore Example
insertElement();
