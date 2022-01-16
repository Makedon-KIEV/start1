let addMessage = document.querySelector('.message'),
  addButton = document.querySelector('.add'),
  todo = document.querySelector('.todo');
// let removeButton = document.querySelector('.remove');
// let doneButton = document.querySelector('.done');
// let clearButton = document.querySelector('.clear');

let todoList = [];

addButton.addEventListener('clik',function(){

  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  };

  todoList.push(newTodo);
  displayMessages();

});

function displayMessages() {
  todoList.forEach(function (item, i) {
    let displayMessages = `Наше дело: ${addMessage.value}`
  });
}