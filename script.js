document.getElementById('add-item').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  var title = document.getElementById('input-field').value;
  var body = document.getElementById('textarea-field').value;

  // Create a new card element
  var card = document.createElement('div');
  card.className = 'col-md-12';
  card.innerHTML = `
    <div class="card mt-4">
      <div class="card-header">
        <h2>${title}</h2>
      </div>
      <div class="card-body">
        <p>${body}</p>
        <button class="btn btn-danger float-end">Delete</button>
      </div>
    </div>
  `;

  // Append the card to the items container
  document.getElementById('items-container').appendChild(card);

  // Clear the input fields
  document.getElementById('input-field').value = '';
  document.getElementById('textarea-field').value = '';
});

// Event delegation for delete button
document.getElementById('items-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-danger')) {
    event.target.closest('.card').remove();
  }
});

//to do list section
const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const tasks = document.getElementById('tasks');

form.addEventListener('submit', addTask);

function addTask(e)
{
  e.preventDefault();

  if (taskInput.value == '')
  {
    return;
  }

  const task = document.createElement('li');
  task.innerHTML  = `
    <input type="checkbox">
    <p>${taskInput.value}</p>
    <button type="button">Delete</button>
  `;

  task.querySelector ('input[type="checkbox"]').
  addEventListener('change', toggleDone);

  task.querySelector('button').addEventListener('click', removeTask);

  tasks.appendChild(task);
  taskInput.value = '';

}

function toggleDone(e)
{
  const task = e.target.parentNode;
  task.querySelector('p').classList.toggle('done');
}

function removeTask(e)
{
  const task = e.target.parentNode;
  tasks.removeChild(task);
}