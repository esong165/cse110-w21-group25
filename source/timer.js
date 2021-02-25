/**
 * All things timer.
 */
export default class Timer {
	/**
	 * Constructs the timer with a default remaining time of 25 minutes.
	 */
	constructor(buttonId, clockId) {
		this.remaining = 25 * 60 * 1000;
		this.$intervalId = null;

		this.buttonId = buttonId;
		this.clockId = clockId;
		this.cycleCount = 0;
		this.onTask = false;
		this.buttonClick.bind(this);
		this.updateButton.bind(this);
	}

	/**
	 * Gets the remaining time.
	 */
	get remaining() {
		return this.$remaining;
	}

	/**
	 * Sets the remaining time.
	 * @param {Number} time - the remaining time, in miliseconds
	 */
	set remaining(time) {
		this.$remaining = time;
		document.getElementById('time-remaining').textContent = Timer.$format(time);
	}

	/**
	 * Formats the given time to the form of mm:ss.
	 * @param {Number} time - the time, in miliseconds, to format
	 */
	static $format(time) {
		const date = new Date(0);
		date.setMilliseconds(time);
		const isoDate = date.toISOString();
		let formatted;
		if (isoDate.length === 24) {
			formatted = isoDate.substr(14, 5);
		} else {
			formatted = isoDate.substr(17, 5);
		}
		return formatted;
	}

	/**
	 * Starts the countdown.  Does nothing if the countdown has already begun.
	 */
	$startCounter() {
		if (this.$intervalId !== null) return;
		const tick = () => {
			this.remaining -= 1000;
			if (this.remaining === 0) {
				this.updateButton();
				clearInterval(this.$intervalId);
				this.$intervalId = null;
				
				//document.getElementById('alarm').play();
				
			}
		};
		this.$intervalId = setInterval(tick, 1000);
		tick();
	}

	buttonClick() {
		// Get the current time of the timer
		const currentTime = document.getElementById(this.clockId).textContent;

		// Timer hasnt begun yet
		if (this.cycleCount === 0 && this.onTask === false) {

			this.remaining = .25 * 60 * 1000;
			this.$startCounter();

			// Need to id to the one in the html
			document.getElementById(this.buttonId).textContent = 'Fail Task';

			this.onTask = true;
		} else if (this.onTask === true) {
			if (currentTime !== "00:00") {
			/*
			Set Timer interval to 25
			**HERE**
			*/
				clearInterval(this.$intervalId);
				this.$intervalId = null;
				this.remaining = .25 * 60 * 1000;
				

				document.getElementById(this.buttonId).textContent = 'Start Pomo';
			} else {
				if (this.cycleCount % 4 === 0) {
					/*
					Set timer to 10 minutes
					Start Countdown
					**HERE**
					*/
					this.remaining = .10 * 60 * 1000;
					this.$startCounter();
					document.getElementById(this.buttonId).disabled = true;
					
				} else {
					/*
					Set timer to 5 minutes
					Start countdown
					**HERE**
					*/
					this.remaining = .05 * 60 * 1000;
					this.$startCounter();
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
			this.remaining = .25 * 60 * 1000;
			this.$startCounter();
			this.onTask = true;
			document.getElementById(this.buttonId).textContent = 'Fail Task';
		}
	}

	updateButton() {
		const currentTime = document.getElementById(this.clockId).textContent;

		if (currentTime === "00:00") {
			if (this.onTask === false) {
				document.getElementById(this.buttonId).textContent = 'Start Pomo';
			} else {
				if (this.cycleCount % 3 === 0 && this.cycleCount !== 0) {
					document.getElementById(this.buttonId).textContent = 'Start Long Break';
					this.cycleCount = -1;
				} else {
					document.getElementById(this.buttonId).textContent = 'Start Short Break';
				}
				this.cycleCount++;
				
			}
			document.getElementById(this.buttonId).disabled = false;
		}
	}

}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.timer = new Timer('timer-button', 'time-remaining');
	document.getElementById('timer-button').addEventListener('click', () => {
		window.app.timer.buttonClick();
	});
});
