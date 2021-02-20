import Button from '../Button.js';

describe('button tests', () => {
	let theButton;
	let theTimer;
	let button;
	beforeEach(() => {
		document.body.innerHTML = '<button id = "pomoButton">Start Pomo</button><div id ="time">25:00</div>';
		theButton = document.getElementById('pomoButton');
		theTimer = document.getElementById('time');

		button = new Button('pomoButton','time');
 	 });

	test('Initial change', () => {
	
		theButton.click();
		expect(theButton.textContent).toBe('Fail Task');
	
	});

	test('ShortBreak', () => {

		theButton.click();
		theTimer.textContent = '0:00';
		setTimeout(function(){
			expect(theButton.textContent).toBe('Start Short Break');
		}, 4000);
	
	
	});

	test('new Pomo', () => {

		theButton.click();
		theTimer.textContent = '0:00';
		setTimeout(function(){
			expect(theButton.textContent).toBe('Start Short Break');
			theButton.click();
			expect(theButton.textContent).toBe('Start Pomo');
		}, 4000);

	});

	test('long break', () => {

		theButton.click();
		theTimer.textContent = '0:00';

		for(let i = 0; i < 3; i++){
		setTimeout(function(){theButton.click();}, 4000);
		}

		expect(theButton.textContent).toBe('Start Long Break');

	});

});