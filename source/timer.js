/**
 * All things timer.
 */
export default class Timer {
	/**
	 * Constructs the timer with a default remaining time of 25 minutes.
	 */
	constructor() {
		this.remaining = 25 * 60 * 1000;
		this.$intervalId = null;
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
				clearInterval(this.$intervalId);
				this.$intervalId = null;
				this.remaining = 25 * 60 * 1000;
				document.getElementById('alarm').play();
			}
		};
		this.$intervalId = setInterval(tick, 1000);
		tick();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.timer = new Timer();
	document.getElementById('timer-button').addEventListener('click', () => {
		window.app.timer.$startCounter();
	});
});
