class TodoItem {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.completed = false
  }
}

class TodoList {
  constructor() {
    this.todos = []
  }

  createTodoItem(id, text) {
    const todoItem = new TodoItem(id, text)
    this.todos.push(todoItem)
  }

  getAllTodoItems() {
    return this.todos
  }

  setTodoItemCompleted(id) {
    const todoItem = this.todos.find((item) => item.id === id)
    if (todoItem) {
      todoItem.completed = true
    }
  }

  getIncompleteTodoItems() {
    return this.todos.filter((item) => !item.completed)
  }

  getCompleteTodoItems() {
    return this.todos.filter((item) => item.completed)
  }

  searchTodoItemById(id) {
    const todoItem = this.todos.find((item) => item.id === id)
    return todoItem || 'Todo item not found'
  }

  removeTodoItemById(id) {
    this.todos = this.todos.filter((item) => item.id !== id)
  }
}

module.exports = { TodoList, TodoItem }
