const { TodoList } = require('../src/todolist.js')

describe('TodoList', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('should create and retrieve todo items', () => {
    todoList.createTodoItem(1, 'Test Todo 1')
    todoList.createTodoItem(2, 'Test Todo 2')

    const allTodos = todoList.getAllTodoItems()

    expect(allTodos.length).toBe(2)
    expect(allTodos[0].id).toBe(1)
    expect(allTodos[1].text).toBe('Test Todo 2')
  })

  it('should set a todo item as completed', () => {
    todoList.createTodoItem(1, 'Test Todo')

    todoList.setTodoItemCompleted(1)

    const completedTodos = todoList.getCompleteTodoItems()
    expect(completedTodos.length).toBe(1)
    expect(completedTodos[0].id).toBe(1)
  })

  it('should get incomplete todo items', () => {
    todoList.createTodoItem(1, 'Incomplete Todo')
    todoList.createTodoItem(2, 'Complete Todo')
    todoList.setTodoItemCompleted(2)

    const incompleteTodos = todoList.getIncompleteTodoItems()
    expect(incompleteTodos.length).toBe(1)
    expect(incompleteTodos[0].text).toBe('Incomplete Todo')
  })

  it('should search for a todo item by ID', () => {
    todoList.createTodoItem(1, 'Searchable Todo')

    const foundTodo = todoList.searchTodoItemById(1)
    expect(foundTodo.id).toBe(1)
    expect(foundTodo.text).toBe('Searchable Todo')
  })

  it('should remove a todo item by ID', () => {
    todoList.createTodoItem(1, 'Todo to Remove')
    todoList.createTodoItem(2, 'Another Todo')

    todoList.removeTodoItemById(1)

    const remainingTodos = todoList.getAllTodoItems()
    expect(remainingTodos.length).toBe(1)
    expect(remainingTodos[0].id).toBe(2)
  })
})
