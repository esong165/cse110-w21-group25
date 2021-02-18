'use strict';

export class Button {
	constructor(buttonId, clockId) {
		let cycleCount = 0;
		let onTask = false;
		document.getElementById(buttonId).addEventListener('click', function() {
		// Get the current time of the timer
			const currentTime = document.getElementById(clockId).textContent;

			// Timer hasnt begun yet
			if (cycleCount === 0 && onTask === false) {
				/* call the timer starter function **HERE** */

				// Need to id to the one in the html
				document.getElementById(buttonId).textContent = 'Fail Task';

				onTask = true;
			} else if (onTask === true) {
				if (currentTime !== '0:00') {
				/*
				Set Timer interval to 25
				**HERE**
				*/

					document.getElementById(buttonId).textContent = 'Start Pomo';
				} else if (document.getElementById(buttonId).textContent === 'Start Pomo') {
					document.getElementById(buttonId).textContent = 'Fail Task';
				} else {
					cycleCount++;
					if (cycleCount % 3 === 0) {
						/*
						Set timer to 10 minutes
						Start Countdown
						**HERE**
						*/
						document.getElementById(buttonId).disabled = true;
					} else {
						/*
						Set timer to 5 minutes
						Start countdown
						**HERE**
						*/
						document.getElementById(buttonId).disabled = true;
					}
				}

				onTask = false;
			} else if (onTask === false) {
				/*
				Set timer to 25 minutes
				Start Countdown
				**HERE**
				*/
			}
		});

		document.getElementById(clockId).addEventListener('change', function() {
			const currentTime = document.getElementById(clockId).textContent;

			if (currentTime === '0:00') {
				if (onTask === false) {
					document.getElementById(buttonId).textContent = 'Start Pomo';
				} else {
					if (cycleCount % 3 === 0) {
						document.getElementById(buttonId).textContent = 'Start Long Break';
					} else {
						document.getElementById(buttonId).textContent = 'Start Short Break';
					}

					document.getElementById(buttonId).disabled = false;
				}
			}
		});
	}
}
