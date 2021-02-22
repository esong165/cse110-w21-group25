'use strict';

export default class Button {
	constructor(buttonId, clockId) {
		this.buttonId = buttonId;
		this.clockId = clockId;
		this.cycleCount = 0;
		this.onTask = false;
		document.getElementById(buttonId).addEventListener('click', function() {
		// Get the current time of the timer
			const currentTime = document.getElementById(clockId).textContent;

			// Timer hasnt begun yet
			if (this.cycleCount === 0 && this.onTask === false) {
				/* call the timer starter function **HERE** */

				// Need to id to the one in the html
				document.getElementById(buttonId).textContent = 'Fail Task';

				this.onTask = true;
			} else if (this.onTask === true) {
				if (currentTime !== '0:00') {
				/*
				Set Timer interval to 25
				**HERE**
				*/

					document.getElementById(buttonId).textContent = 'Start Pomo';
				} else if (document.getElementById(buttonId).textContent === 'Start Pomo') {
					document.getElementById(buttonId).textContent = 'Fail Task';
					this.onTask = true;
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

				this.onTask = false;
			} else if (this.onTask === false) {
				/*
				Set timer to 25 minutes
				Start Countdown
				**HERE**
				*/
			}
		});

		
	}


	updateButton(buttonId, clockId){
		
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
	}
}
