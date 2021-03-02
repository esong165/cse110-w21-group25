/**
 * @jest-environment jsdom
 */


 //idea just make the html elements in the test.js
import Tasklist from './tasklist.js';


document.body.innerHTML = `
    <header>
        <h1 id="site-header">
            Tomato
        </h1>
    </header>
    
    <main>
        <div id="current-task-container">
            <h3 id="current-task">Default</h3>
            <h3 id="num-pomos">1</h3>
            <button id="done-button" type="submit" value="Done With Task" >
                Done
            </button>
        </div>

        <section id="timer-display">
          <p id="time-remaining">25:00</p>
        </section>

        <button id="timer-button"></button>
        <div>
          <button id="popup-button">Click</button>
        </div>

        <div id="task-list">
            <h3>Task Name:               Estimated pomodoros:</h3>

            <ul id="tasks-container" is="task-list"></ul>
            
            <form id="add-task-container">
                <label>Task name:</label>
                <input type="text" id="new-task-name" maxlength="30">
                <label>Estimated pomodoros:</label>
                <input type="number" id="new-task-count" value='1' min='1' max='99'>
                <input type="submit" id="add-task-btn" value="Add Task">
            </form>
        </div>

        <button id="tasklist-btn">Open Task List</button> 
    </main>
    <script src="./task-item.js" type="module"></script>
    <script src="./timer.js" type="module"></script>
    <script src="./tasklist.js" type="module"></script>
    <script src="./main.js"></script>


`;

jest.spyOn(window, 'alert').mockImplementation(() => {});

test('Constructor Test', () => {
	localStorage.clear()
    let tasklist = new Tasklist();
	let emptyArr =[];
	let selectedArr = ['Default', '1'];
	expect((tasklist.$tasks)).toEqual(emptyArr);
	expect((tasklist.$selected)).toEqual(selectedArr);
});

test('Basic Add Tasks', () => {
	localStorage.clear()
	let tasklist = new Tasklist();
	let length = 10;
	let addedTaskName =[];
	let addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name="";
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
	localStorage.clear()
	let tasklist = new Tasklist();
	expect(tasklist.$tasks.length).toBe(0);
	let name = "Go to the mountain";
	let time = 30;
	for (let i = 0; i < 5; i++) {
		tasklist.addTask(name, time);

	}
	
	expect(tasklist.$tasks.length).toBe(1);
	expect(tasklist.$tasks[0][0]).toBe(name);
	expect(tasklist.$tasks[0][1]).toBe(time);
	
});

test('Remove one Task', () => {
	localStorage.clear()
	let tasklist = new Tasklist();

	let length = 3;
	let addedTaskName =[];
	let addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name="";
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
	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	
		//let indexToRemove = Math.floor(Math.random() * addedTaskName.length);
		let indexToRemove = 2;
		expect(tasklist.$tasks[2][0]).toBe(addedTaskName[2]);
		tasklist.removeTask(tasklist.$tasks[2][0]);
		addedTaskName.pop();
		addedTaskPomo.pop();
	
//	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	for(let i = 0; i < tasklist.$tasks.length; i++) {
		expect(tasklist.$tasks[i][0]).toBe(addedTaskName[i]);
		expect(tasklist.$tasks[i][1]).toBe(addedTaskPomo[i]);
	}

});


test('Remove All Tasks', () => {
	localStorage.clear()
	let tasklist = new Tasklist();

	let length = 10;
	let addedTaskName =[];
	let addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name="";
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
	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	while(addedTaskName.length > length / 2) {
		//let indexToRemove = Math.floor(Math.random() * addedTaskName.length);
		let indexToRemove =0;
		tasklist.removeTask(addedTaskName[indexToRemove]);
		addedTaskName.splice(indexToRemove, 1);
		addedTaskPomo.splice(indexToRemove, 1);
	}
//	expect(tasklist.$tasks.length).toBe(addedTaskName.length);
	for(let i = 0; i < tasklist.$tasks.length; i++) {
		expect(tasklist.$tasks[i][0]).toBe(addedTaskName[i]);
		expect(tasklist.$tasks[i][1]).toBe(addedTaskPomo[i]);
	}

	while(addedTaskName.length > 0) {
		tasklist.removeTask(addedTaskName[0]);
		addedTaskName.splice(0, 1);
		addedTaskPomo.splice(0, 1);
	}
	expect(tasklist.$tasks.length).toBe(0);
});

test('Basic Select Tasks', () => {
	localStorage.clear()
	let tasklist = new Tasklist();
	let length = 10;
	let addedTaskName =[];
	let addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name="";
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
		let selectedTaskIndex = (Math.floor(Math.random() * length));
		tasklist.selectTask(addedTaskName[selectedTaskIndex]);
		expect(tasklist.$selected[0]).toBe(addedTaskName[selectedTaskIndex]);
		expect(tasklist.$selected[1]).toBe(addedTaskPomo[selectedTaskIndex]);
	}
});


test('Select and Remove Tasks', () => {
	localStorage.clear()
	let tasklist = new Tasklist();
	// length should be even
	let length = 10;
	let addedTaskName =[];
	let addedTaskPomo =[];
	for (let j = 0; j < length; j++) {
		let name="";
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
		let selectedTaskIndex = (Math.floor(Math.random() * length));
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