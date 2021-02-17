let timer;

/**
 * All things timer.
 */
export default class Timer {
	/**
	 * Constructs the timer with a default remaining time of 25 minutes.
	 */
	constructor() {
		this.$remaining = 25 * 60 * 1000;
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
		document.getElementById('time-remaining').textContent = this.$format(time);
	}

	/**
	 * Formats the given time to the form of mm:ss.
	 * @param {Number} time - the time, in miliseconds, to format
	 */
	$format(time) {
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
}

document.addEventListener('DOMContentLoaded', () => {
	timer = new Timer();
});
