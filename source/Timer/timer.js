let countDown;

export default class CountDown {
	constructor() {
		this.myMinutes = document.getElementById("minutes").value;
		this.mySeconds = document.getElementById("seconds").value;
		this.input = document.getElementById("input-area").style.display = 'block';
		this.rules = document.getElementById("rules").style.display = 'block';
		this.start = document.getElementById("start-timer").style.display = 'block';
	}

	set tick() {
		const timeDisplay = document.getElementById('time-display');
		if (this.mySeconds < 10) {
			this.mySeconds = "0" + this.mySeconds;
		}
		if (this.myMinutes == 0) {
			this.myMinutes = "00";
		}
		else if (this.myMinutes < 10) {
			this.myMinutes = "0" + this.myMinutes;
		}
		var message = this.myMinutes.toString() + ":" + this.mySeconds;
		timeDisplay.innerHTML = message;
		if(this.mySeconds === 0 && this.myMinutes !==0) 
			this.myMinutes--;
			this.mySeconds=60;
		}
		else if(this.mySeconds === 0) 
			document.getElementById("alarm").play();
			clearInterval(intervalHandle);
			resetPage();
		}
		this.mySeconds--;
	}

	set startCounter() {
		if (isNaN(this.myMinutes)) {
			alert("Type a valid number please");
			return;
		}
		if (isNaN(this.mySeconds)) {
			alert("Type a valid number please");
			return;
		}
		let intervalHandle = setInterval(tick, 1000);
		this.input = 'none';
		this.rules = 'none';
		this.start = 'none';
	}
};
document.addEventListener('DOMContentLoaded', () => {
	countDown = new CountDown();
});
