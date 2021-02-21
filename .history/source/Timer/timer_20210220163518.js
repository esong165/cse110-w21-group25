let intervalHandle;
let myMinutes;
let mySeconds;

function resetPage() {
	document.getElementById('input-area').style.display = 'block';
	document.getElementById('rules').style.display = 'block';
	document.getElementById('start-timer').style.display = 'block';
}

function tick() {
	const timeDisplay = document.getElementById('time-display');
	if (mySeconds < 10) {
		mySeconds = '0' + mySeconds;
	}
	if (myMinutes === 0) {
		myMinutes = '00';
	}
	else if (myMinutes < 10) {
		myMinutes = '0' + myMinutes;
	}
	const message = myMinutes.toString() + ':' + mySeconds;
	timeDisplay.innerHTML = message;
	if (mySeconds === 0 && myMinutes !== 0) {
		myMinutes--;
		mySeconds = 60;
	}
	else if (mySeconds === 0) {
		document.getElementById('alarm').play();
		clearInterval(intervalHandle);
		resetPage;
	}
	mySeconds--;
}

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
	document.getElementById('start-timer').style.display = 'none';
}

document.addEventListener('click', () => {
	countDown = new CountDown();
});
