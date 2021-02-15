class TaskItem extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({mode: 'open'});

        let task = document.createElement('li');
        task.setAttribute('class', 'task');

        let removeTaskButton = document.createElement('button');
        removeTaskButton.setAttribute('onclick', 'removeTask(taskId)');
        removeTaskButton.textContent = 'Remove';
        task.appendChild(removeTaskButton);

        /* 
            A task will also have innerHTML/textContent representing the name
            of the task and an attribute to track the estimated pomo count.
        */ 
        
        shadow.appendChild(task);

        let style = document.createElement('style');

        /* 
        style.textContent = `

        `;
        */

        shadow.appendChild(style);
    }
}

customElements.define('task-item', TaskItem);