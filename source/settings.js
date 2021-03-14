/**
 * Settings Class
 */
export default class Settings {
	constructor() {
		this.pomoDuration = 25 * 60 * 1000;
		this.shortBreakDuration = 5 * 60 * 1000;
		this.longBreakDuration = 15 * 60 * 1000;
		this.displaySeconds = true;
	}

	/**
	 * Changes the current page to the settings page
	 */
	toSettings() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'grid';
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
	 * Updates the alarm sound when timer reaches zero
	 */
	updateAlarmSound() {
		let alarmSoundValue = Number(document.getElementById('alarm-sound').value);
		let alarmSound = document.getElementById('alarm');
		if (alarmSoundValue === 1) {
			alarmSound.src = 'sounds/air-horn.mp3';
		} else if (alarmSoundValue === 2) {
			alarmSound.src = 'sounds/siren.mp3';
		} else if (alarmSoundValue === 3) {
			alarmSound.src = 'sounds/beeping.mp3';
		} else if (alarmSoundValue === 4) {
			alarmSound.src = 'sounds/clock-alarm.mp3';
		} else if (alarmSoundValue === 5) {
			alarmSound.src = 'sounds/bell.mp3';
		}
	}

	/**
	 * When the user clicks the return home button
	 */
	toHome() {
		document.getElementById('timer').style.display = 'block';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
	}

	/**
	 * When the user clicks the return home button
	 */
	toTaskList() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'block';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
	}

	/**
	 * When the user clicks the return home button
	 */
	toStats() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'block';
		document.getElementById('faq').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
	}

	/**
	 * When the user clicks the return home button
	 */
	toFaq() {
		document.getElementById('timer').style.display = 'none';
		document.getElementById('task-list').style.display = 'none';
		document.getElementById('stats').style.display = 'none';
		document.getElementById('faq').style.display = 'block';
		document.getElementById('settings').style.display = 'none';
	}
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.app === undefined) window.app = {};
	window.app.settings = new Settings();
	document.getElementById('settings-button').addEventListener('click', () => {
		window.app.settings.toSettings();
	});
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
	})
	document.getElementById('home-button').addEventListener('click', () => {
		window.app.settings.toHome();
	});
	document.getElementById('task-list-button').addEventListener('click', () => {
		window.app.settings.toTaskList();
	});
	document.getElementById('stats-button').addEventListener('click', () => {
		window.app.settings.toStats();
	});
	document.getElementById('faq-button').addEventListener('click', () => {
		window.app.settings.toFaq();
	});
});
