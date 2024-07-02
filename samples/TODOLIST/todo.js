var todoItems;
//api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}
//CRUD
//create
function addTodo(todo) {
    todoItems.push(todo);
}
//read
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
//delete
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
//update
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
//business logic
//business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) {
        return item.done;
    });
}
function log() {
    console.log(todoItems);
}
function addTwoTodoItems() {
    var item1 = {
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
