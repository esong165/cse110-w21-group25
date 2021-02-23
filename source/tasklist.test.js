import Tasklist from './tasklist'
/*
Example test

test('small timer format', () => {
	const timer = new Timer();
	expect((timer.$format((10 * 60 + 31.1) * 1000))).toBe('10:31');
});
*/

test('Constructor Test', () => {
    const tasklist = new Tasklist();
	let emptyArr =[];
	let selectedArr = ['Default', '1'];
	expect((tasklist.$tasks)).toBe(emptyArr);
	expect((tasklist.$selected)).toBe(selectedArr);
});

test('Basic Add Tasks', () => {
	const tasklist = new Tasklist();
	let length = 10;
	addedTaskName =[];
	addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name;
		let time;
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,<.>/?;:\'\"\\[]{}';
		let nameLength = 4;
		for (let i = 0; i < nameLength; i++) {
			name += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		addedTaskName.push(name);
		time = (Math.floor(Math.random() * 99) + 1).toString(10);
		addedTaskPomo.push(time);
		tasklist.addTask(name, time);
	}

	for (let i = 0; i < length; i++) {

		expect(tasklist.$tasks[i][0]).toBe(addedTaskName[i]);
		expect(tasklist.$tasks[i][1]).toBe(addedTaskPomo[i]);
	}
});

test('Add Duplicate Tasks', () => {
	const tasklist = new Tasklist();
	let name = "Go to the mountain";
	let time = 30;
	for (let i = 0; i < 5; i++) {
		tasklist.addTask(name, time);
	}
	
	expect(tasklist.$tasks.length).toBe(1);
	expect(tasklist.$tasks[0][0]).toBe(name);
	expect(tasklist.$tasks[0][1]).toBe(time);
	
});

test('Remove All Tasks', () => {
	const tasklist = new Tasklist();

	let length = 10;
	addedTaskName =[];
	addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name;
		let time;
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,<.>/?;:\'\"\\[]{}';
		let nameLength = 4;
		for (let i = 0; i < nameLength; i++) {
			name += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		addedTaskName.push(name);
		time = (Math.floor(Math.random() * 99) + 1).toString(10);
		addedTaskPomo.push(time);
		tasklist.addTask(name, time);
	}

	while(addedTaskName.length > length / 2) {
		let indexToRemove = Math.floor(Math.random() * addedTaskName.length);
		tasklist.remove(addedTaskName[indexToRemove]);
		addedTaskName.splice(indexToRemove, 1);
		addedTaskPomo.splice(indexToRemove, 1);
	}
	expect(tasklist.$tasks.length).toBe(addedTasksName.length);
	for(let i = 0; i < tasklist.$tasks.length; i++) {
		expect(tasklist.$tasks[i][0]).toBe(addedTasksName[i]);
		expect(tasklist.$tasks[i][1]).toBe(addedTasksPomo[i]);
	}

	while(addedTaskName.length > 0) {
		tasklist.remove(addedTaskName[0]);
		addedTaskName.splice(0, 1);
		addedTaskPomo.splice(0, 1);
	}
	expect(tasklist.$tasks.length).toBe(0);
});

test('Basic Select Tasks', () => {
	let length = 10;
	addedTaskName =[];
	addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name;
		let time;
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,<.>/?;:\'\"\\[]{}';
		let nameLength = 4;
		for (let i = 0; i < nameLength; i++) {
			name += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		addedTaskName.push(name);
		time = (Math.floor(Math.random() * 99) + 1).toString(10);
		addedTaskPomo.push(time);
		tasklist.addTask(name, time);
	}

	for (let i =0; i < length; i++) {
		selectTaskIndex = (Math.floor(Math.random() * length));
		tasklist.selectTask(addedTaskName[selectedTaskIndex]);
		expect(tasklist.$selected[0]).toBe(addedTaskName[selectedTaskIndex]);
		expect(tasklist.$selected[1]).toBe(addedTaskPomo[selectedTaskIndex]);
	}
});


test('Select and Remove Tasks', () => {

	// length should be even
	let length = 10;
	addedTaskName =[];
	addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name;
		let time;
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,<.>/?;:\'\"\\[]{}';
		let nameLength = 4;
		for (let i = 0; i < nameLength; i++) {
			name += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		addedTaskName.push(name);
		time = (Math.floor(Math.random() * 99) + 1).toString(10);
		addedTaskPomo.push(time);
		tasklist.addTask(name, time);
	}

	for (let i =0; i < length / 2; i++) {
		selectTaskIndex = (Math.floor(Math.random() * length));
		tasklist.selectTask(addedTaskName[selectedTaskIndex]);
		let removeTaskIndex = (Math.floor(Math.random() * length));
		while(removeTaskIndex === selectedTaskIndex) {
			removeTaskIndex = (Math.floor(Math.random() * length));
		}
		tasklist.removeTask(addedTaskName[removeTaskIndex]);
		addedTaskName.splice(removeTaskIndex, 1);
		addedTaskPomo.splice(removeTaskIndex, 1);
		if(removeTaskIndex < selectedTaskIndex) selectedTaskIndex--; // decrements in case remove task shifts array index
		expect(tasklist.$selected[0]).toBe(addedTaskName[selectedTaskIndex]);
		expect(tasklist.$selected[1]).toBe(addedTaskPomo[selectedTaskIndex]);
		tasklist.removeTask(addedTaskName[selectedTaskIndex]);
		addedTaskName.splice(selectedTaskIndex, 1);
		addedTaskPomo.splice(selectedTaskIndex, 1);
		selectedTaskIndex = 0;
		if(addedTaskName.length > 0) {
			expect(tasklist.$selected[0]).toBe(addedTaskName[selectedTaskIndex]);
			expect(tasklist.$selected[1]).toBe(addedTaskPomo[selectedTaskIndex]);
		}
		else {
			expect(tasklist.$selected[0]).toBe('Default');
			expect(tasklist.$selected[1]).toBe('1');
		}
	}
});
