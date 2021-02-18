import Button from '../Button.js';

test('Initial change', () => {
	document.body.innerHTML = '<button id = "pomoButton">Start Pomo</button><div id ="time">25:00</div>';

	const theButton = document.getElementById('pomoButton');
	const theTimer = document.getElementById('time');

	const button = new Button('pomoButton','time');
	theButton.click();
	expect(theButton.textContent).toBe('Fail Task');
	
});

test('Initial change', () => {
	document.body.innerHTML = '<button id = "pomoButton">Start Pomo</button><div id ="time">25:00</div>';

	const theButton = document.getElementById('pomoButton');
	const theTimer = document.getElementById('time');

	const button = new Button('pomoButton','time');
	theTimer.textContent = '0:00';
	expect(theButton.textContent).toBe('Short Break');
	
});