'use strict';

export default class Button {
	constructor(buttonId, clockId) {
		this.buttonId = buttonId;
		this.clockId = clockId;
		this.cycleCount = 0;
		this.onTask = false;
		this.buttonClick.bind(this);
		this.updateButton.bind(this);
	}

	buttonClick() {
		// Get the current time of the timer
		const currentTime = document.getElementById(this.clockId).textContent;

		// Timer hasnt begun yet
		if (this.cycleCount === 0 && this.onTask === false) {
			/* call the timer starter function **HERE** */

			// Need to id to the one in the html
			document.getElementById(this.buttonId).textContent = 'Fail Task';

			this.onTask = true;
		} else if (this.onTask === true) {
			if (currentTime !== '0:00') {
			/*
			Set Timer interval to 25
			**HERE**
			*/

				document.getElementById(this.buttonId).textContent = 'Start Pomo';
			} else if (document.getElementById(this.buttonId).textContent === 'Start Pomo') {
				document.getElementById(this.buttonId).textContent = 'Fail Task';
				this.onTask = false;
			} else {
				if (this.cycleCount % 3 === 0) {
					/*
					Set timer to 10 minutes
					Start Countdown
					**HERE**
					*/
					document.getElementById(this.buttonId).disabled = true;
				} else {
					/*
					Set timer to 5 minutes
					Start countdown
					**HERE**
					*/
					document.getElementById(this.buttonId).disabled = true;
				}
			}

			this.onTask = false;
		} else if (this.onTask === false) {
			/*
			Set timer to 25 minutes
			Start Countdown
			**HERE**
			*/
			this.onTask = true;
			document.getElementById(this.buttonId).textContent = 'Fail Task';
		}
	}

	updateButton() {
		const currentTime = document.getElementById(this.clockId).textContent;

		if (currentTime === '0:00') {
			if (this.onTask === false) {
				document.getElementById(this.buttonId).textContent = 'Start Pomo';
			} else {
				if (this.cycleCount % 3 === 0 && this.cycleCount !== 0) {
					document.getElementById(this.buttonId).textContent = 'Start Long Break';
					this.cycleCount = 0;
				} else {
					document.getElementById(this.buttonId).textContent = 'Start Short Break';
					this.cycleCount++;
				}
			}
			document.getElementById(this.buttonId).disabled = false;
		}
	}
}
