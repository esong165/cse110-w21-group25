class TaskItem extends HTMLElement {
    constructor(taskName, pomoCount) {
        super();


        let shadow = this.attachShadow({mode: 'open'});

        let task = document.createElement('li');
        task.setAttribute('class', 'task');

        //Set name of task
        let name = document.createElement('span');
        name.innerHTML = 'Task name: ';
        name.innerHTML += taskName + ', ';
        task.appendChild(name);

        //Set estimated pomodoros
        let count = document.createElement('span');
        count.innerHTML = 'Estimated pomodoros: ';
        count.innerHTML += pomoCount;
        task.appendChild(count);

        //select task button note: considering making this a radio option or making the text a clickable button
        let selectTaskButton = document.createElement('button');
        selectTaskButton.innerHTML = 'Select';

        task.appendChild(selectTaskButton);
        

        let removeTaskButton = document.createElement('button');
        //removeTaskButton.setAttribute('onclick', 'removeTask(taskId)');
        removeTaskButton.innerHTML = 'Remove';
        
        task.appendChild(removeTaskButton);
        
        

        shadow.appendChild(task);

        let style = document.createElement('style');

        /* 
        style.textContent = `
            .task > button {}
            visibility: visible;
        `;
        

        shadow.appendChild(style);
        */  
    }
}
customElements.define('task-item', TaskItem);