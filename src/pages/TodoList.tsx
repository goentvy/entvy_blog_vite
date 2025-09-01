import { useState, useEffect } from 'react';
import '../styles/TodoList.css'

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todolist_wrap">
        <p>Todo List</p>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.text}
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default TodoList;