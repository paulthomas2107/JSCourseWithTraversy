const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(e) {
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
}

function onBlur(e) {
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;
  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }
  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const item = formData.get('item');
  const priority = formData.get('priority');
  const entries = formData.entries();
  //console.log(item, priority);
  //console.log(entries);
  for (let entry of entries) {
    console.log(entry[0], entry[1]); // name & value
  }
}

const form = document.getElementById('item-form');
form.addEventListener('submit', onSubmit2);
