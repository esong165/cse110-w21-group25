
test('Initial change', () => {
	document.body.innerHTML = '<button id = "pomoButton">Start Pomo</button><div id ="time">25:00</div>';
	require('../button.js');

	const theButton = document.getElementById('pomoButton');
	const theTimer = document.getElementById('time');

	Button('pomoButton','time');
	theButton.click();
	expect(theButton.textContent).toBe('Fail Task');
	
});