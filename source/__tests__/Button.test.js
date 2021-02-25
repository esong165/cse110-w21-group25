import Button from '../Button.js';

describe('button tests', () => {
	let theButton;
	let theTimer;
	let button;
	beforeEach(() => {
		document.body.innerHTML = '<button id = "pomoButton">Start Pomo</button><div id ="time">25:00</div>';
		theButton = document.getElementById('pomoButton');
		theTimer = document.getElementById('time');

		if(window.app === undefined) window.app = {};
		window.app.button = new Button('pomoButton','time');
	
 	 });

	test('Initial change', () => {
	
		theButton.click();
		expect(theButton.textContent).toBe('Fail Task');
	
	});

	test('ShortBreak', () => {

		theButton.click();
		theTimer.textContent = '0:00';
		window.app.button.updateButton();
		expect(theButton.textContent).toBe('Start Short Break');
	
	});
/*
	test('new Pomo', () => {

		theButton.click();
		theTimer.textContent = '0:00';
		button.updateButton('pomoButton', 'time', 0, true);
		theButton.click();
		button.updateButton('pomoButton', 'time', 1, false);
		theButton.click();
		expect(theButton.textContent).toBe('Start Pomo');
		

	});

	test('long break', () => {

		jest.useFakeTimers();

		theButton.click();
		theTimer.textContent = '0:00';
		button.updateButton('pomoButton', 'time', 3, true);
		expect(theButton.textContent).toBe('Start Long Break');
	

	});
*/
});