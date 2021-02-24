 import TaskItem from './task-item.js';
export default class Tasklist extends HTMLUListElement {

    /**
     * Constructs the Tasklist with a default tasklist and selected task, or 
     * the tasklist and selected task stored in localStorage if they exist.
     */
    constructor(){
        // Required call to super in custom web component
        super();

        // Initialize $tasks and $selected to default values
        this.$tasks = [];
        this.$selected = ['Default', '1'];

        // Get values from localStorage and updating $tasks and $selected if these are not null
        let taskItemArr = JSON.parse(localStorage.getItem('taskItemArr'));
        let selectedArr = JSON.parse(localStorage.getItem('selectedTask'));
        if(taskItemArr !== null) {
            this.$tasks = taskItemArr;
        } 
        if(selectedArr !== null) {
            this.$selected = selectedArr;
            
        } 
        // Update current task display
        document.getElementById('current-task').innerHTML = this.$selected[0];
        document.getElementById('num-pomos').innerHTML = this.$selected[1];

        // Update tasklist display
        for(const task of this.$tasks) {
            let currTask = new TaskItem(task[0], task[1]);
            currTask.id = task[0];

            /* Add select and remove buttons to each task fetched from localStorage
                (Perhaps create new method doing this to be called here and in addTask()) */
            currTask.shadowRoot.children[0].children[2].addEventListener('click', 
                function() {document.getElementById('tasks-container').selectTask(task[0])});
            currTask.shadowRoot.children[0].children[3].addEventListener('click', 
                function() {document.getElementById('tasks-container').removeTask(task[0])});

            document.getElementById('tasks-container').appendChild(currTask);
        }
        
    }

    /**
     * Add a task to the tasklist.
     * @param {String} name - the name of the task
     * @param {Number} count - the estimated number of pomodoro cycles
     */
    addTask(name, count) {

        // Validity checking (WIP)
        if(name.trim() === '') {
            alert('Please enter a valid task name.');
            return;
        }
        let task = new TaskItem(name, count);
        task.id = name;

        /* Add select and remove buttons to the task
            (Perhaps create new method doing this to be called here and in c-tor) */
        task.shadowRoot.children[0].children[2].addEventListener('click', 
            function() {document.getElementById('tasks-container').selectTask(name)});
        task.shadowRoot.children[0].children[3].addEventListener('click', 
            function() {document.getElementById('tasks-container').removeTask(name)});

        // Store task as array of array in local storage -- could refactor into separate method
        let taskItemArr = JSON.parse(localStorage.getItem("taskItemArr"));
        if(taskItemArr == null){
            taskItemArr = [];
        }
        let taskNameNum = [];
        taskNameNum.push(name);
        taskNameNum.push(count);

        // Validity checking (WIP)
        if(!JSON.stringify(taskItemArr).includes(JSON.stringify(taskNameNum))){
            taskItemArr.push(taskNameNum);
            this.$tasks.push([name, count]);
            this.appendChild(task);
        } else {
            alert('Task is already in tasklist.');
            return;
        }

        // This could probably just go in the if block above
        localStorage.setItem("taskItemArr", JSON.stringify(taskItemArr));
    }

    /**
     * Select a task as the current task.
     * @param {String} taskId - name of selected task. 
     */
    selectTask(taskId) {
        let task = document.getElementById(taskId).shadowRoot.children[0];
        let name = task.children[0].innerHTML;
        let pomos = task.children[1].innerHTML;
    
        // Update current task display
        document.getElementById("current-task").innerHTML = name;
        document.getElementById("num-pomos").innerHTML = pomos;

        // Update $selected instance variable
        this.$selected = [name, pomos];
        
        // Store selected task in local storage
        localStorage.setItem("selectedTask", JSON.stringify(this.$selected));
    }

    /**
     * Remove a task from the tasklist.
     * @param {String} taskId - name of task to be removed. 
     */
    removeTask(taskId){
        let currTaskId = document.getElementById("current-task").innerHTML;
        let taskContainer = document.getElementById('tasks-container');
    
        let task = document.getElementById(taskId);

        // Remove task from $tasks instance variable
        this.$tasks = arrayRemove(this.$tasks, taskId);

        /* Edge case check for a bug I could not figure out -- without this line,
            sometimes a task enters the tasklist with undefined, undefined -- 
            occurs when you add a task, select it, then remove it and refresh 
            Justin Check how local storage works with select and see what's wrong with case
            */
        if(JSON.stringify(this.$tasks) == '[{}]') this.$tasks = [];

        // Update tasklist display
        taskContainer.removeChild(task);
        
        // If current task is the removed task, move to next task in tasklist or default task
        if (currTaskId === taskId) {
            // Select the next task if there are any left in list
            if(taskContainer.hasChildNodes()) { 
                console.log(this.$tasks);
                document.getElementById('tasks-container').selectTask(this.$tasks[0][0]);
            } else {
                // Update displays and $selected to defaults if there are no tasks left in list
                document.getElementById("current-task").innerHTML = 'Default';
                document.getElementById("num-pomos").innerHTML = '1';
                this.$selected = ['Default', '1'];
            }
        }
    
        // Update localStorage with $tasks and $selected
        localStorage.setItem('taskItemArr', JSON.stringify(this.$tasks));
        localStorage.setItem('selectedTask', JSON.stringify(this.$selected));
    }
}

customElements.define('task-list', Tasklist, {extends: 'ul'});

/**
 * Helper function to remove task from $tasks.
 * @param {*} arr - array to remove from.
 * @param {*} toRemove - element to be removed.
 */
function arrayRemove(arr, toRemove) { 
    return arr.filter(function(el) { 
        return el[0] != toRemove; 
    });
}