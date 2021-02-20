let timer;
export default class Countdown {
	constructor() {
		this.myMinutes = document.getElementById('minutes').value;
		this.mySeconds = document.getElementById('seconds').value;
	}

	set startCounter() {
		if (isNaN(this.myMinutes)) {
			alert('Type a valid number please');
			return;
		}
		if (isNaN(this.mySeconds)) {
			alert('Type a valid number please');
			return;
		}
		if (this.mySeconds == null) {
			this.mySeconds = 0;
		}
		this.intervalHandle = setInterval(tick, 1000);
		document.getElementById('rules').style.display = 'none';
		document.getElementById('inputArea').style.display = 'none';
		document.getElementById('startTimer').style.display = 'none';
	}

	set tick() {
		const timeDisplay = document.getElementById('time');
		if (this.mySeconds < 10) {
			this.mySeconds = '0' + this.mySeconds;
		}
		if (this.myMinutes === 0) {
			this.myMinutes = '00';
		}
		else if (this.myMinutes < 10) {
			this.myMinutes = '0' + this.myMinutes;
		}
		const message = this.myMinutes.toString() + ':' + this.mySeconds;
		timeDisplay.innerHTML = message;
		if (this.mySeconds === 0 && this.myMinutes !== 0) {
			this.myMinutes--;
			this.mySeconds = 60;
		}
		else if (this.mySeconds === 0) {
			document.getElementById('alarm').play();
			clearInterval(intervalHandle);
		}
		this.mySeconds--;
	}
}
document.addEventListener('DOMContentLoaded', () => {
	timer = new Countdown();
});
