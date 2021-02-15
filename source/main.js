function manageTaskList() {
    let taskContainer = document.getElementById('task-list');
    let taskButton = document.getElementById('task-button');
    let display = window.getComputedStyle(taskContainer).display;
    
    if(display === 'none') {
        taskContainer.style.display = 'block';
        taskButton.innerHTML = 'Close Task List';
    } else {
        taskContainer.style.display = 'none';
        taskButton.innerHTML = 'Open Task List';
    }
}

document.getElementById('task-button').addEventListener('click', manageTaskList);