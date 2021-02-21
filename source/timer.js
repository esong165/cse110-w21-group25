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
	if (window.app === undefined) window.app = {};
	window.app.timer = new Timer();
});

let intervalHandle;
let myMinutes;
let mySeconds;
let start = document.getElementById('timer-button');
start.addEventListener('click', startCounter);

/**
 * Once the count down is done, timer is reset to the previous page
 */
function resetPage() {
	document.getElementById('input-area').style.display = 'block';
	document.getElementById('rules').style.display = 'block';
	document.getElementById('timer-button').style.display = 'block';
}

/**
 * Function for showing the time after each second
 */
function tick() {
	const timeDisplay = document.getElementById('time-remaining');
	if (mySeconds < 10) {
		mySeconds = '0' + mySeconds;
	}
	if (myMinutes === 0) {
		myMinutes = '00';
	} else if (myMinutes < 10) {
		myMinutes = '0' + myMinutes;
	}
	const message = myMinutes.toString() + ':' + mySeconds;
	timeDisplay.innerHTML = message;
	if (mySeconds === 0 && myMinutes !== 0) {
		myMinutes--;
		mySeconds = 60;
	} else if (mySeconds === 0) {
		document.getElementById('alarm').play();
		clearInterval(intervalHandle);
		resetPage();
	}
	mySeconds--;
}

/**
 * Function starts when the button is clicked and takes in the minute and second input
 */
function startCounter() {
	myMinutes = document.getElementById('minutes').value;
	mySeconds = document.getElementById('seconds').value;
	if (isNaN(myMinutes)) {
		alert('Type a valid number please');
		return;
	}
	if (isNaN(mySeconds)) {
		alert('Type a valid number please');
		return;
	}
	intervalHandle = setInterval(tick, 1000);
	document.getElementById('input-area').style.display = 'none';
	document.getElementById('rules').style.display = 'none';
	document.getElementById('timer-button').style.display = 'none';
}
