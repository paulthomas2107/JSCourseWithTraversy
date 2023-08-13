/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

function onClick(e) {
  //console.log(e.target); // what was clicked on
  //console.log(e.currentTarget); // ditto
  //e.target.style.backgroundColor = 'black ';
  console.log(e.type); //click
  console.log(e.timeStamp);
  console.log(e.clientX, e.clientY);
  console.log(e.offsetX, e.offsetY);
  console.log(e.pageX, e.pageY);
  console.log(e.screenX, e.screenY);
}
function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

const logo = document.querySelector('img');
logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

document.body.addEventListener('click', function (e) {
  console.log(e.target); // what was clicked on
  console.log(e.currentTarget); // ditto
});

// Stop click action on URL link
document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault(); // stops clicks
  console.log('Link was clicked');
});
