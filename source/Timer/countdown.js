let myMinutes;
let mySeconds;
let intervalHandle;
let timer;
export default class Timer {
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
		intervalHandle = setInterval(tick, 1000);
		document.getElementById('rules').style.display = 'none';
		document.getElementById('inputArea').style.display = 'none';
		document.getElementById('startTimer').style.display = 'none';
	}

	set tick() {
		const timeDisplay = document.getElementById('time');
		let min = this.myMinutes;
		let sec = this.mySeconds;
		if (sec < 10) {
			sec = '0' + sec;
		}
		if (min === 0) {
			min = '00';
		}
		else if (min < 10) {
			min = '0' + min;
		}
		const message = min.toString() + ':' + sec;
		timeDisplay.innerHTML = message;
		if (mySeconds === 0 && myMinutes !== 0) {
			myMinutes--;
			mySeconds = 60;
		}
		else if (mySeconds === 0) {
			document.getElementById('alarm').play();
			clearInterval(intervalHandle);
		}
		mySeconds--;
	}
}
document.addEventListener('DOMContentLoaded', () => {
	timer = new Timer();
});
