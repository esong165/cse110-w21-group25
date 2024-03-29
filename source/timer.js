/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^_" }] */

/**
 * All things timer.
 */
export default class Timer {
	/**
	 * Constructs the timer with a default remaining time configured in settings.
	 * Requires `window.app.settings` to be loaded.
	 * @param {String} timeRemainingId - the ID of the current remaining time text
	 * @param {String} buttonId - the ID of the timer button
	 * @param {String} stateMessageId - the ID of the displayed state message
	 */
	constructor(timeRemainingId, buttonId, stateMessageId) {
		this.remaining = window.app.settings.pomoDuration;
		this.$CYCLES = Object.freeze([
			this.State.POMO,
			this.State.SHORT_BREAK,
			this.State.POMO,
			this.State.SHORT_BREAK,
			this.State.POMO,
			this.State.SHORT_BREAK,
			this.State.POMO,
			this.State.LONG_BREAK
		]);
		this.$cycle = 0;
		this.$status = this.Status.PAUSED;
		this.$intervalId = null;
		this.$timeRemainingId = timeRemainingId;
		this.$buttonId = buttonId;
		this.$stateMessageId = stateMessageId;
	}

	/**
	 * Gets the possible timer states.
	 * @returns {Object} state of timer
	 */
	get State() {
		return Object.freeze({ POMO: 1, SHORT_BREAK: 2, LONG_BREAK: 3 });
	}

	/**
	 * Gets the possible timer statuses.
	 * @returns {number} status of timer
	 */
	get Status() {
		return Object.freeze({ PAUSED: 1, COUNTDOWN: 2 });
	}

	/**
	 * Gets the current state.
	 * @returns {Object} state of timer
	 */
	get state() {
		return this.$CYCLES[this.$cycle];
	}

	/**
	 * Gets the current status.
	 * @returns {Object} current status
	 */
	get status() {
		return this.$status;
	}

	/**
	 * Gets the remaining time.
	 * @returns {number} remaining time in miliseconds
	 */
	get remaining() {
		return this.$remaining;
	}

	/**
	 * Sets the remaining time. Also modifies the title of the page to display the remaining time.
	 * @param {number} time - the remaining time, in milliseconds
	 */
	set remaining(time) {
		this.$remaining = time;
		document.getElementById('time-remaining').textContent = window.app.settings.displaySeconds
			? Timer.$format(time)
			: Timer.$formatShort(time);
		document.title = 'Cirillo - ' + window.app.settings.displaySeconds
			? 'Cirillo - ' + Timer.$format(time) + ' left'
			: 'Cirillo - ' + Timer.$formatShort(time) + ' left';
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
			if (this.remaining === 0) {
				if (this.state === this.State.POMO) {
					const currTaskId = document.getElementById('tasks-container').selected[0];
					document.getElementById('tasks-container').updateCurrPomos(currTaskId);
				}
				this.$cycle = (this.$cycle + 1) % this.$CYCLES.length;
				this.$initCycle();
				this.notifyUser();
				document.getElementById('alarm').play();
			} else {
				this.remaining -= 1000;
			}
		};
		this.$status = this.Status.COUNTDOWN;
		if (this.state !== this.State.POMO) {
			document.getElementById(this.$buttonId).disabled = true;
			const breakType = this.state === this.State.SHORT_BREAK ? 'short' : 'long';
			document.getElementById(this.$stateMessageId).textContent = `Taking a ${breakType} break.`;
		}
		this.$intervalId = setInterval(tick, 1000);
		setTimeout(tick, 0);
	}

	/**
	 * Changes the timer color and duration based on whether the timer is in a work mode, short break mode,
	 * or a long break mode.
	 */
	$initCycle() {
		if (this.$intervalId !== null) {
			clearInterval(this.$intervalId);
			this.$intervalId = null;
		}

		this.$status = this.Status.PAUSED;

		const button = document.getElementById(this.$buttonId);
		const stateMessage = document.getElementById(this.$stateMessageId);
		const taskContainer = document.getElementById('tasks-container');
		switch (this.state) {
		case this.State.POMO: {
			// Change the background-color, selected/hover task-item color
			document.body.style.backgroundColor = 'rgb(204, 255, 204)';
			taskContainer.color = 'rgb(187, 240, 187)';
			document.getElementById('tasks-container').changeSelectedColor('pomo');

			this.remaining = window.app.settings.pomoDuration;
			button.textContent = 'Start Pomo';

			const cycles = this.$CYCLES.length;
			let i = this.$cycle;
			let pomoCount = 0;

			do {
				i = (i + 1) % cycles;
				if (this.$CYCLES[i] === this.State.POMO) {
					++pomoCount;
				} else if (this.$CYCLES[i] === this.State.LONG_BREAK) {
					if (i === (this.$cycle + 1) % cycles) {
						stateMessage.textContent = 'Long break coming up!';
					} else {
						const pluralSuffix = pomoCount === 1 ? '' : 's';
						stateMessage.textContent = `Long break in ${pomoCount} pomo${pluralSuffix}.`;
					}
					break;
				}
			} while (i !== this.$cycle);

			if (i === this.$cycle) {
				stateMessage.textContent = 'No long break in sight.';
			}
			break;
		}
		// short break mode
		case this.State.SHORT_BREAK:
			// Change the background-color, selected/hover task-item color
			document.body.style.backgroundColor = 'rgb(245, 196, 242)';
			taskContainer.color = 'rgb(232, 174, 228)';
			document.getElementById('tasks-container').changeSelectedColor('short-break');

			this.remaining = window.app.settings.shortBreakDuration;
			stateMessage.textContent = 'Take a short break.';
			button.textContent = 'Start Short Break';
			break;
		// long break mode
		case this.State.LONG_BREAK:
			// Change the background-color, selected/hover task-item color
			document.body.style.backgroundColor = 'rgb(209, 236, 255)';
			taskContainer.color = 'rgb(185, 206, 235)';
			document.getElementById('tasks-container').changeSelectedColor('long-break');

			this.remaining = window.app.settings.longBreakDuration;
			stateMessage.textContent = 'Take a long break.';
			button.textContent = 'Start Long Break';
			break;
		}
		document.getElementById(this.$buttonId).disabled = false;
		document.getElementById('task-list-button').style.display = 'inline';
		document.getElementById('stats-button').style.display = 'inline';
	}

	/**
	 * Starts the timer when the user clicks/taps the button
	 */
	buttonClick() {
		if (this.status === this.Status.PAUSED) {
			this.$startCounter();
			this.$status = this.Status.COUNTDOWN;
			if (this.state === this.State.POMO) {
				document.getElementById(this.$buttonId).textContent = 'Cancel Pomo';
				document.getElementById('task-list-button').style.display = 'none';
				document.getElementById('stats-button').style.display = 'none';
			}
		} else {
			// Must be in pomo since the button is only clickable in countdown status during pomo
			this.$initCycle();
		}
	}

	/**
	 * If a change in the settings occurs, both remaining and initCycle are immediately called.
	 */
	notifySettingsChanged() {
		if (this.status === this.Status.COUNTDOWN) return;
		// Refresh remaining time format immediately in case it changed
		this.remaining = this.$remaining;
		this.$initCycle();
	}

	/**
	 * Notifies the user of their next task when the timer ends if the user has enabled notifications.
	 */
	notifyUser() {
		let message = 'Time\'s up! Start your ';
		if (this.state === this.State.POMO) {
			message += 'work session now.';
		} else if (this.state === this.State.SHORT_BREAK) {
			message += 'short break now.';
		} else {
			message += 'long break now.';
		}
		if (!('Notification' in window)) {
			alert('This browser does not support desktop notification.');
		} else if (Notification.permission === 'granted') {
			const _notification = new Notification(message, { tag: 'timer' });
		} else if (Notification.permission !== 'denied') {
			Notification.requestPermission().then(function(permission) {
				if (permission === 'granted') {
					const _notification = new Notification(message, { tag: 'timer' });
				}
			});
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.timer = new Timer('time-remaining', 'timer-button', 'timer-state-message');
	window.app.settings.updatePomoDuration();
	window.app.settings.updateShortBreakDuration();
	window.app.settings.updateLongBreakDuration();
	window.app.settings.updateShowSeconds();
	document.getElementById('timer-button').addEventListener('click', () => {
		window.app.timer.buttonClick();
	});
});
