class TaskItem extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        let task = document.createElement('li');
        task.setAttribute('class', 'task');

        let name = document.createElement('span');
        name.innerHTML = 'Task name: ';
        task.appendChild(name);

        let count = document.createElement('span');
        count.innerHTML = 'Estimated pomodoros: ';
        task.appendChild(count);

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