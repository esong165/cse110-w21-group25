const popup_button = document.getElementById('popup-button');
popup_button.addEventListener('click', changeVisibility);

/**
 * Changes visibility of a popup.
 * @param {Event} _event - The event of the button being clicked.
 */
function changeVisibility(_event) {
	const display = document.getElementById('popup');
	const vis = window.getComputedStyle(display).visibility;
	if (vis === 'hidden') {
		display.style.visibility = 'visible';
	} else {
		display.style.visibility = 'hidden';
	}
}
