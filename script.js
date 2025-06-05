let tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true }
];

const taskList = document.getElementById('task-list');
const input = document.getElementById('new-task-input');
const addBtn = document.getElementById('add-btn');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task';

    const taskText = document.createElement('span');
    taskText.textContent = task.title;
    if (task.completed) taskText.classList.add('completed');
    li.appendChild(taskText);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
    completeBtn.onclick = () => toggleTask(task.id);
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(task.id);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function addTask() {
  const title = input.value.trim();
  if (title === '') return;
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
  input.value = '';
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

addBtn.addEventListener('click', addTask);

renderTasks();
