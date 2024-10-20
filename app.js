const fetchTodos = () => {
    fetch('http://localhost:3000/get')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(todos => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            if (!Array.isArray(todos)) {
                console.error('Expected an array, got:', todos);
                document.getElementById('noRecord').style.display = 'block';
                return;
            }

            if (todos.length === 0) {
                document.getElementById('noRecord').style.display = 'block';
            } else {
                document.getElementById('noRecord').style.display = 'none';
                todos.forEach(todo => {
                    const taskDiv = document.createElement('div');
                    taskDiv.className = 'task';

                    const checkboxDiv = document.createElement('div');
                    checkboxDiv.className = 'checkbox';
                    checkboxDiv.onclick = () => handleEdit(todo._id);

                    const checkboxIcon = todo.done ? '✓' : '○';
                    checkboxDiv.innerHTML = <span>${checkboxIcon}</span><p class="${todo.done ? 'line_through' : ''}">${todo.task}</p>;
                    
                    const deleteSpan = document.createElement('span');
                    deleteSpan.innerHTML = '🗑️';
                    deleteSpan.onclick = (e) => {
                        e.stopPropagation();
                        handleDelete(todo._id);
                    };

                    checkboxDiv.appendChild(deleteSpan);
                    taskDiv.appendChild(checkboxDiv);
                    taskList.appendChild(taskDiv);
                });
            }
        })
        .catch(err => console.error('Error fetching todos:', err));
};

const handleAdd = () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (!task.trim()) {
        return alert('Please enter a task.');
    }

    fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
    })
    .then(response => response.json())
    .then(() => {
        taskInput.value = '';
        fetchTodos();
    })
    .catch(err => console.error('Error adding task:', err));
};

const handleEdit = (id) => {
    fetch(http://localhost:3000/update/${id}, { method: 'PUT' })
        .then(() => fetchTodos())
        .catch(err => console.error('Error updating task:', err));
};

const handleDelete = (id) => {
    fetch(http://localhost:3000/delete/${id}, { method: 'DELETE' })
        .then(() => fetchTodos())
        .catch(err => console.error('Error deleting task:', err));
};

document.getElementById('addTaskBtn').onclick = handleAdd;

fetchTodos();
