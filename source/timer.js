/**
 * All things timer.
 */
export default class Timer {
	/**
	 * Constructs the timer with a default remaining time configured in settings.
	 * Requires `window.app.settings` to be loaded.
	 */
	constructor(buttonId, clockId) {
		this.remaining = window.app.settings.pomoTime;
		this.$state = this.State.POMO;
		this.$status = this.Status.PAUSED;
		this.$intervalId = null;
		this.$buttonId = buttonId;
		this.$clockId = clockId;
		this.$cycle = 0;
		this.buttonClick.bind(this);
		this.updateButton.bind(this);
	}

	/**
	 * Gets the possible timer states.
	 */
	get State() {
		return Object.freeze({ "POMO": 1, "SHORT_BREAK": 2, "LONG_BREAK": 3 });
	}

	/**
	 * Gets the possible timer statuses.
	 */
	get Status() {
		return Object.freeze({ "PAUSED": 1, "COUNTDOWN": 2 });
	}

	/**
	 * Gets the current state.
	 */
	get state() {
		return this.$state;
	}

	/**
	 * Gets the current status.
	 */
	get state() {
		return this.$status;
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
		document.getElementById('time-remaining').textContent = window.app.settings.displaySeconds
			? Timer.$format(time)
			: Timer.$formatShort(time);
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
	 * Formats the given time to the form mm.
	 * @param {Number} time - the time, in miliseconds, to format
	 */
	static $formatShort(time) {
		return this.$format(time).substr(0, 2);
	}

	/**
	 * Starts the countdown.  Does nothing if the countdown has already begun.
	 */
	$startCounter() {
		if (this.$intervalId !== null) return;
		const tick = () => {
			this.remaining -= 1000;
			if (this.remaining === 0) {
				if (this.state === this.State.POMO) {
					const currTaskId = document.getElementById('current-task').value;
					document.getElementById('tasks-container').updateCurrPomos(currTaskId);
				}
				this.updateButton();
				clearInterval(this.$intervalId);
				this.$intervalId = null;
				document.getElementById('alarm').play();
			}
		};
		this.$intervalId = setInterval(tick, 1000);
		tick();
	}

	buttonClick() {
		// Timer hasnt begun yet
		if (this.$cycle === 0 && this.state === this.State.POMO) {
			this.remaining = window.app.settings.pomoTime;
			this.$startCounter();
			document.getElementById(this.$buttonId).textContent = 'Fail Task';
			this.$countingDown = true;
			document.getElementById('task-list-button').disabled = true;
			document.getElementById('task-list').style.display = 'none';
			document.getElementById('task-list-button').innerHTML = 'Open Task List';
		} else if (this.state !== this.State.POMO) {
			if (this.remaining !== 0) {
				clearInterval(this.$intervalId);
				this.$intervalId = null;
				this.remaining = window.app.settings.pomoTime;
				document.getElementById(this.$buttonId).textContent = 'Start Pomo';
				document.getElementById('task-list-button').disabled = false;
			} else {
				if (this.$cycle % 4 === 0) {
					this.remaining = window.app.settings.longBreakTime;
					this.$startCounter();
					document.getElementById(this.$buttonId).disabled = true;
				} else {
					// Start short break
					this.remaining = window.app.settings.shortBreakTime;
					this.$startCounter();
					document.getElementById(this.$buttonId).disabled = true;
				}
			}
			this.$countingDown = false;
		} else if (this.$countingDown === false) {
			this.remaining = window.app.settings.pomoTime;
			this.$startCounter();
			this.$countingDown = true;
			document.getElementById(this.$buttonId).textContent = 'Fail Task';
			document.getElementById('task-list-button').disabled = true;
			document.getElementById('task-list').style.display = 'none';
			document.getElementById('task-list-button').innerHTML = 'Open Task List';
		}
	}

	updateButton() {
		if (this.$remaining !== 0) {
			if (this.$countingDown === false) {
				document.getElementById(this.$buttonId).textContent = 'Start Pomo';
			} else {
				if (this.$cycle === 3) {
					document.getElementById(this.$buttonId).textContent = 'Start Long Break';
				} else {
					document.getElementById(this.$buttonId).textContent = 'Start Short Break';
				}
				this.$cycle++;
			}
			document.getElementById(this.$buttonId).disabled = false;
			document.getElementById('task-list-button').disabled = false;
		}
	}

	notifySettingsChanged() {
		if (this.status === this.Status.PAUSED) {
			switch (this.state) {
				case this.State.POMO:
					this.remaining = window.app.settings.pomoTime;
					break;
			}
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
