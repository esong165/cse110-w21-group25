/**
 * Settings Class
 */
export default class Settings {
	constructor() {
		this.pomoDuration = 25 * 60 * 1000;
		this.shortBreakDuration = 5 * 60 * 1000;
		this.longBreakDuration = 15 * 60 * 1000;
		this.displaySeconds = true;
		this.volume = 1;
	}

	/**
	 * Updates the duration of a single pomo.
	 */
	updatePomoDuration() {
		this.pomoDuration = Number(document.getElementById('pomo-duration').value) * 60 * 1000;
		window.app.timer.notifySettingsChanged();
	}

	/**
	 * Updates the duration of a short break.
	 */
	updateShortBreakDuration() {
		this.shortBreakDuration = Number(document.getElementById('short-break-duration').value) * 60 * 1000;
		window.app.timer.notifySettingsChanged();
	}

	/**
	 * Updates the duration of a long break.
	 */
	updateLongBreakDuration() {
		this.longBreakDuration = Number(document.getElementById('long-break-duration').value) * 60 * 1000;
		window.app.timer.notifySettingsChanged();
	}

	/**
	 * Updates the timer display style between showing seconds and not.
	 */
	updateShowSeconds() {
		this.displaySeconds = document.getElementById('show-seconds').checked;
		window.app.timer.notifySettingsChanged();
	}

	/**
	 * Updates the alarm sound
	 */
	updateAlarmSound() {
		document.getElementById('alarm').src = document.getElementById('alarm-sound').value;
	}

	/**
	 * Updates the volume settings of the horn
	 */
	updateVolume() {
		const volumeWhole = document.getElementById('volume-slider').value;
		this.volume = volumeWhole / 100;
		document.getElementById('alarm').volume = this.volume;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.settings = new Settings();
	document.getElementById('pomo-duration').addEventListener('input', () => {
		window.app.settings.updatePomoDuration();
	});
	document.getElementById('short-break-duration').addEventListener('input', () => {
		window.app.settings.updateShortBreakDuration();
	});
	document.getElementById('long-break-duration').addEventListener('input', () => {
		window.app.settings.updateLongBreakDuration();
	});
	document.getElementById('show-seconds').addEventListener('input', () => {
		window.app.settings.updateShowSeconds();
	});
	document.getElementById('alarm-sound').addEventListener('input', () => {
		window.app.settings.updateAlarmSound();
	});
	document.getElementById('volume-slider').addEventListener('input', () => {
		window.app.settings.updateVolume();
	});
});
