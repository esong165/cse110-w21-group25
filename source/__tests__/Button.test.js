import Button from '../Button.js';

beforeEach(() => {
	document.body.innerHTML = '<button id = "pomoButton">Start Pomo</button><div id ="time">25:00</div>';

	var theButton = document.getElementById('pomoButton');
	var theTimer = document.getElementById('time');

	var button = new Button('pomoButton','time');
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