type Todo = {
  id: number;
  title: string;
  done: boolean;
};

let todoItems: Todo[];

//api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

//CRUD
//create
function addTodo(todo: Todo) {
  todoItems.push(todo);
}

//read
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

//delete
function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

//update
function completeTodo(index: number, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

//business logic

function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item) => {
    return item.done;
  });
}

function log(): void {
  console.log(todoItems);
}

function addTwoTodoItems(): void {
  const item1 = {
    id: 4,
    title: '아이템4',
    done: false,
  };

  addTodo(item1);

  addTodo({
    id: 5,
    title: '아이템5',
    done: false,
  });
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
completeTodo(1, todoItems[1]);
