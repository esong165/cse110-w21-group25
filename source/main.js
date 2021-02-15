function manageTaskList() {
    let taskContainer = document.getElementById('task-list');
    let taskButton = document.getElementById('tasklist-btn');
    let display = window.getComputedStyle(taskContainer).display;
    
    if(display === 'none') {
        taskContainer.style.display = 'block';
        taskButton.innerHTML = 'Close Task List';
    } else {
        taskContainer.style.display = 'none';
        taskButton.innerHTML = 'Open Task List';
    }
}

function addTask(event) {
    event.preventDefault();
    let name = document.getElementById('new-task-name');
    let count = document.getElementById('new-task-count');
    if(name.value === '' || document.getElementById(name.value) !== null) {
        alert('Invalid task input or task already added');
    }
    else{
        let task = document.createElement('task-item');
        task.id = name.value;

        // Get task item
        let list = task.shadowRoot.children[0];

        // Set name of task
        list.children[0].innerHTML += name.value + ', ';

        // Set estimated pomodoros
        list.children[1].innerHTML += count.value;
        
        // Add remove button
        list.children[2].addEventListener('click', function() {removeTask(task.id)});

        document.getElementById('tasks-container').appendChild(task);

        // Reset input fields
        name.value = '';
        count.value = 1;
    }
}

function removeTask(taskId){
    console.log(taskId);
    document.getElementById('tasks-container').removeChild(document.getElementById(taskId));
}

document.getElementById('tasklist-btn').addEventListener('click', manageTaskList);