//window.onload = function () {
//  document.querySelector('h1').textContent = 'Hello Paul !';
// };

window.addEventListener('load', () => {
  console.log('Page Loaded');
});

window.addEventListener('DOMContentLoaded', () => {
  //document.querySelector('h1').textContent = 'Hello Paul ! ***';
  console.log('DOM Loaded');
});

console.log('Run me....first !');

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});
