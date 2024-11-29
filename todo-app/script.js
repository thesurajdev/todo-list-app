// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener for form submission
todoForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  
  // Get the input value
  const task = todoInput.value;
  
  // Create a new list item
  const li = document.createElement('li');
  li.textContent = task;

  // Add a delete button
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', function () {
    li.remove(); // Remove the task
  });
  
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = '';
});
