const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  // key
  //console.log(e.key);
  if (e.key === 'Enter') {
    alert('Enter pressed');
  }
  // keyCode
  //console.log(e.keyCode);
  if (e.keyCode === 13) {
    alert('Enter 13 pressed');
  }
  // code
  //console.log(e.code);
  if (e.code === 'Digit1') {
    alert('Enter Digit 1 pressed');
  }

  if (e.repeat) {
    console.log('Holding key down ' + e.key);
  }
  document.querySelector('h1').innerText = `${e.key} ${e.keyCode} ${e.code}`;

  // Alt, ctrl, shift keys
  console.log('Shift ' + e.shiftKey);
  console.log('Ctrl ' + e.ctrlKey);
  console.log('Alt ' + e.altKey);

  // two keys shift etc
  if (e.shiftKey && e.key === 'K') {
    console.log('SHIFT K');
  }
};

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
