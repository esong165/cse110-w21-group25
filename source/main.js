function manageTaskList() {
    let taskList = document.getElementById('task-list');
    let taskButton = document.getElementById('tasklist-btn');
    let display = window.getComputedStyle(taskList).display;
    let taskContainer = document.getElementById('tasks-container');
    
    //Currently this is the only way I can get populateTaskList() to work
    // Note: Since i put populateTaskList here the selected task after a refresh only works when you press tasklist-btn
    if(!(taskContainer.hasChildNodes())){
        populateTaskList();
    }
    
    
    if(display === 'none') {

        taskList.style.display = 'block';
        taskButton.innerHTML = 'Close Task List';
    } else {
        taskList.style.display = 'none';
        taskButton.innerHTML = 'Open Task List';
    }
}

//populate tasklist with local storage
function populateTaskList(){
    let taskItemArr = JSON.parse(localStorage.getItem("taskItemArr"));
    //creates new map if there is none
    if (taskItemArr == null || taskItemArr.length == 0) {
        
        taskItemArr = [];
        localStorage.setItem("taskItemArr", JSON.stringify(taskItemArr));

        selectedTask =[];
        selectedTask.push("Current Task: Default");
        selectedTask.push("# of Pomos: 1");
        localStorage.setItem("selectedTask", JSON.stringify(selectedTask));
    }
    else{

        let selectedTask = JSON.parse(localStorage.getItem("selectedTask"));

        document.getElementById("current-task").innerHTML = selectedTask[0];
        document.getElementById("num-pomos").innerHTML = selectedTask[1];
        //add all tasks from local storage
        
        for(let i = 0; i< taskItemArr.length; i++){
            
            let task = new TaskItem(taskItemArr[i][0], taskItemArr[i][1]);
            task.id = taskItemArr[i][0];

            // Get task item
            let list = task.shadowRoot.children[0];

            //Add select button functionality
            list.children[2].addEventListener('click', function() {selectTask(task.id)});
            
            // Add remove button functionality
            list.children[3].addEventListener('click', function() {removeTask(task.id)});

            document.getElementById('tasks-container').appendChild(task);
        }

        
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
        //function() {selectTask(name.value)}, function() {removeTask(name.value)}
        let task = new TaskItem(name.value, count.value);
        task.id = name.value;
        
        // Get task item
        let list = task.shadowRoot.children[0];

        //store task in local storage 
        /*
        let taskItemMap = JSON.parse(localStorage.getItem("taskItemMap"));
        taskItemMap.set(name.value, count.value);
        localStorage.setItem("taskItemMap", JSON.stringify(taskItemMap));
        */

        //store task as array of array in local storage
        let taskItemArr = JSON.parse(localStorage.getItem("taskItemArr"));
        taskNameNum = [];
        taskNameNum.push(name.value);
        taskNameNum.push(count.value);

        taskItemArr.push(taskNameNum);
        localStorage.setItem("taskItemArr", JSON.stringify(taskItemArr));

         //Add select button functionality
         list.children[2].addEventListener('click', function() {selectTask(task.id)});
        
         // Add remove button functionality
         list.children[3].addEventListener('click', function() {removeTask(task.id)});

        //add task to list
        document.getElementById('tasks-container').appendChild(task);

        // Reset input fields
        name.value = '';
        count.value = 1;
    }
}

//Done with Task 

function doneTask(event){
    event.preventDefault();
    //Code here for statistics
    taskStr = document.getElementById("current-task").innerHTML;
    taskId = taskStr.substring(11, taskStr.length-2);
    removeTask(taskId);

    //reset tasks
    document.getElementById("current-task").innerHTML ="Current Task: Default";
    document.getElementById("num-pomos").innerHTML ="# of Pomos: 1";

}


function selectTask(taskId){
    //choose one of the following
    //change the button to be task 
    //document.getElementById("tasklist-btn").innerHTML = taskId;
    //change the current-task header
    let task = document.getElementById(taskId);
    let list = task.shadowRoot.children[0];

    document.getElementById("current-task").innerHTML = list.children[0].innerHTML;
    document.getElementById("num-pomos").innerHTML = list.children[1].innerHTML;
    
    //stores selected task in local storage
    let selectedTask = [];
    selectedTask.push(list.children[0].innerHTML);
    selectedTask.push(list.children[1].innerHTML);
    localStorage.setItem("selectedTask", JSON.stringify(selectedTask));
}

function removeTask(taskId){
    if (document.getElementById("current-task").innerHTML == taskId)
    {
        document.getElementById("current-task").innerHTML = "Default Task";
        
    }
    document.getElementById('tasks-container').removeChild(document.getElementById(taskId));

    //remove task in local storage as map 
    /*
    let taskItemMap = JSON.parse(localStorage.getItem("taskItemMap"));
    taskItemMap.delete(taskId);
    localStorage.setItem("taskItemMap", JSON.stringify(taskItemMap));
    */

    //remove task as array of array in local storage
    let taskItemArr = JSON.parse(localStorage.getItem("taskItemArr"));
    taskItemArr = arrayRemove(taskItemArr, taskId);
    localStorage.setItem("taskItemArr", JSON.stringify(taskItemArr));
}

function arrayRemove(arr, taskId) { 

return arr.filter(function(ele){ 
    return ele[0] != taskId; 
});
}
    
populateTaskList();
document.getElementById('tasklist-btn').addEventListener('click', manageTaskList);