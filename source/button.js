const btn = document.getElementById('btn');
btn.addEventListener('click', changeVisibility);

/**
 * A function to change visibility of a popup.
 * @param {Event} event - The event of the button being clicked.
 */
function changeVisibility(event) {
  const display = document.getElementById('popup');
  const vis = window.getComputedStyle(display).visibility;
  if (vis === 'hidden') {
    display.style.visibility = 'visible';
  } else {
    display.style.visibility = 'hidden';
  }
}
