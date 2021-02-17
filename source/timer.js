'use strict';

let timer;

class Timer {
	constructor() {
		// in ms
		this.$remaining = 25 * 60 * 1000;
	}

	get remaining() {
		return this.$remaining;
	}

	/**
	 * Sets the remaining time.
	 * @param {Number} ms - the remaining time, in miliseconds.
	 */
	set remaining(ms) {
		this.$remaining = ms;
		const date = new Date(0);
		date.setMilliseconds(this.$remaining);
		const isoDate = date.toISOString();
		let formatted;
		if (isoDate.length === 24) {
			formatted = isoDate.substr(14, 5);
		} else {
			formatted = isoDate.substr(17, 5);
		}
		document.getElementById('time-remaining').textContent = formatted;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	timer = new Timer();
});

// demo
document.addEventListener('DOMContentLoaded', () => {
	timer.remaining = (10 * 60 + 31.9) * 1000; // 10:31
	setTimeout(() => {
		timer.remaining = (100000000000 * 60 + 29.1) * 1000;
	}, 1000); // 40:29
});
