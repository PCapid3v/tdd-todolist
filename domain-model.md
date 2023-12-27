// Add your domain model below

# User story

```text
    Create a todo item that has an ID, text description, and starts off incomplete
    Get all todo items
    Set a todo completed by its ID
    Get only todo items that are incomplete
    Get only todo items that are complete
    Search and return a todo item by its ID, or return a message saying it doesn’t exist
    Remove a todo item by its ID
```

**Nouns:**

1. Todo item
2. ID
3. Text description
4. Todo list

**Verbs:**

1. Create (Create a todo item)
2. Get (Get all todo items)
3. Set (Set a todo completed by its ID)
4. Search (Search and return a todo item by its ID)
5. Remove (Remove a todo item by its ID)

| Methods          | Inputs                                                       | Data | Scenario              | Outputs                                           |
| ---------------- | ------------------------------------------------------------ | ---- | --------------------- | ------------------------------------------------- |
| ToDoItem(@class) | description(@string), ID(@number), completedStatus(@boolean) | -    | If there is a string  | Return a string with the description              |
|                  |                                                              |      | If there is no string | Return 'Please enter a todo!'                     |
| `getText`        |                                                          |  | -                     | `text` (@String): The description of the todo item |
| `isCompleted`    |                                                          |  | -                     | `completed` (@Boolean): The completion status      |

### `TodoList` Class

| Methods                  | Inputs                | Data                                                     | Scenario                                  | Outputs                                           |
| ------------------------ | --------------------- | -------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| ToDoList()               |                   | Initializes an empty list of todo items                  | Creating a new todo list                  |  (constructor)                                |
| `addTodoItem`            | `todoItem` (TodoItem) | Appends the provided `TodoItem` to the list              | Adding a new todo item to the list        |                                               |
| `getAllTodoItems`        |                   |                                                      | Retrieving all todo items in the list     | Array of `TodoItem`: All todo items in the list   |
| `getIncompleteTodoItems` |                   |                                                      | Retrieving todo items that are incomplete | Array of `TodoItem`: Incomplete todo items        |
| `getCompleteTodoItems`   |                   |                                                      | Retrieving todo items that are complete   | Array of `TodoItem`: Complete todo items          |
| `searchTodoItemById`     | `id` (@Number)        | Searches the list for a todo item with the provided ID   | Searching for a todo item by ID           | `TodoItem` or `null`: The found todo item or null |
| `removeTodoItemById`     | `id` (@Number)        | Removes the todo item with the provided ID from the list | Removing a todo item by ID                |                                               |
