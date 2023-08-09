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
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  // Embed items
  button.appendChild(icon);
  li.appendChild(button);
  // Add to panel
  document.querySelector('.items').appendChild(li);
}

createListItem('Twix');
createNewItem('Burger');
