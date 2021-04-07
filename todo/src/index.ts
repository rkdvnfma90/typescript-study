let todoItems

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ]
  return todos
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems()
  return todos
}

function addTodo(todo) {
  todoItems.push(todo)
}

function deleteTodo(index) {
  todoItems.splice(index, 1)
}

function completeTodo(index, todo) {
  todo.done = true
  todoItems.splice(index, 1, todo)
}

// business logic
function logFirstTodo() {
  return todoItems[0]
}

function showCompleted() {
  return todoItems.filter(item => item.done)
}

// 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야함
}

function log() {
  console.log(todoItems)
}

todoItems = fetchTodoItems()
addTwoTodoItems()
log()
