const tasks = [
    {task: 'go code'},
    {task: 'shopping'},
    {task: 'go work'}
];


function addNewTask() {
    const taskInput = document.getElementById('task-input');
    console.log('taskInput', taskInput.value)

    const  ul = document.querySelector('.todo-list-ul');
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.onclick = () => {
        li.classList.add('active');
    }

    const button = document.createElement('button');
    button.innerText = 'DELETE';
    button.classList.add('btn', 'btn-success');
    button.onclick = () => {
        li.remove();
    }
    tasks.unshift({task: taskInput.value})
    console.log('tasks', tasks)
    li.append(button, taskInput.value);
    ul.append(li);
}

const btn = document.querySelector('.btn-input');
btn.addEventListener('click', addNewTask);

function getTodoList(alltasks) {
    const  ul = document.querySelector('.todo-list-ul');

    const lieElements = alltasks.map((elem) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.onclick = () => {
            li.classList.add('active');
        }

        const button = document.createElement('button')
        button.innerText = 'DELETE';
        button.classList.add('btn', 'btn-success');
        button.onclick = () => {
            li.remove();
        }

        li.append(button, elem.task);
        return li
    })
    return ul.append(...lieElements);

}

getTodoList(tasks);