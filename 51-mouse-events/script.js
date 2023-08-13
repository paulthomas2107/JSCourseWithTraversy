const logo = document.querySelector('img');

const onClick = () => {
  console.log('click event');
};

const onRightClick = () => {
  console.log('Right click event');
};

const onMouseDown = () => {
  console.log('on mouse down');
};

const onMouseUp = () => {
  console.log('on mouse up');
};

const onMouseWheel = () => {
  console.log('on mouse wheel');
};

const onMouseOver = () => {
  console.log('on mouse over');
};

const onMouseOut = () => {
  console.log('on mouse out');
};

const onDragStart = () => {
  console.log('on drag start');
};

const onDragEnd = () => {
  console.log('on drag end');
};

const onDrag = () => {
  console.log('dragging');
};

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
